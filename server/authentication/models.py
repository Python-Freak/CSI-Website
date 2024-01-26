import datetime
import os
from django.utils.functional import cached_property
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import string
import random
from django.contrib.auth.hashers import make_password
import glob
from .members import Member

id_length = 20


def make_custom_user_id():
    satisfied = False
    while not satisfied:
        custom_string = ''.join(random.choice(
            string.ascii_uppercase) for _ in range(id_length))
        check_list = list(User.objects.filter(custom_id=custom_string))
        if len(check_list) == 0:
            satisfied = True

    return custom_string


class MyUserManager(BaseUserManager):
    def create_user(self, email, csi_id, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address.')
        
        if not csi_id:
            raise ValueError("Users must have a CSI id")

        user = self.model(
            email=self.normalize_email(email),
            csi_id=csi_id,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, csi_id, full_name, roll_no,password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email=email,
            csi_id=csi_id,
            full_name=full_name,
            roll_no=roll_no,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    custom_id = models.CharField(
        max_length=id_length, null=False, blank=False, editable=False, unique=True)
    email = models.EmailField(
        max_length=240, null=False, blank=False, unique=True)
    csi_id = models.CharField(
        max_length=200, null=False, blank=False, unique=True)
    roll_no = models.CharField(max_length = 8, null=False, blank=False, unique = True)
    full_name = models.CharField(max_length=300, null=False, blank=False)
    expiry_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_board_member = models.BooleanField(default = False)

    USERNAME_FIELD = 'csi_id'
    REQUIRED_FIELDS = ['email']

    objects = MyUserManager()

    def save(self, *args, **kwargs):
        if not self.is_admin:
            if self.custom_id == '' or self.custom_id is None:
                self.custom_id = make_custom_user_id()
            member = Member.objects.filter(csi_id = self.csi_id).first()
            if member:
                self.roll_no = member.roll_no
                self.full_name = member.name
                self.expiry_date = member.expiry_date
                self.is_board_member = member.is_board_member
                if self.expiry_date >= datetime.date.today():
                    super(User, self).save(*args, **kwargs)
                else:
                    raise ValueError("Membership expired")
            else:
                raise ValueError("NOT a CSI Member")

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin or self.is_superuser

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

    def __str__(self):
        return str(self.csi_id)
    


# Generated by Django 5.0.1 on 2024-01-20 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_remove_user_bio'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('roll_no', models.CharField(max_length=8, unique=True)),
                ('csi_id', models.CharField(max_length=8, unique=True)),
                ('expiry_date', models.DateField()),
                ('is_board_member', models.BooleanField(default=False)),
            ],
        ),
    ]
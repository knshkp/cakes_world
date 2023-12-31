# Generated by Django 4.2.1 on 2023-05-28 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_pastrie_alter_cake_images"),
    ]

    operations = [
        migrations.RenameField(
            model_name="cake",
            old_name="price",
            new_name="priceL",
        ),
        migrations.RenameField(
            model_name="pastrie",
            old_name="price",
            new_name="priceL",
        ),
        migrations.AddField(
            model_name="cake",
            name="priceM",
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name="cake",
            name="priceS",
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name="pastrie",
            name="priceM",
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name="pastrie",
            name="priceS",
            field=models.IntegerField(default=100),
        ),
    ]

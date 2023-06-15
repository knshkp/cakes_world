# Generated by Django 4.2.1 on 2023-05-14 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_cake_remove_cartitems_cart_remove_cartitems_pizza_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Pastrie",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("price", models.IntegerField(default=100)),
                ("images", models.URLField()),
            ],
        ),
        migrations.AlterField(
            model_name="cake",
            name="images",
            field=models.URLField(),
        ),
    ]

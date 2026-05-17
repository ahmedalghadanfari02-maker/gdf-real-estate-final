from django.db import models

from django.db import models

class Property(models.Model):
    
    STATUS_CHOICES = (
        ('sale', 'For Sale'),
        ('rent', 'For Rent'),
    )
    
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
   
    price = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    image = models.ImageField(upload_to='properties/', null=True, blank=True)

    def __str__(self):
        return self.name

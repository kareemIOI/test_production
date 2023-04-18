from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class UrlTestCase(TestCase):
    
    def setUp(self):
        self.user = User.objects.create_user(username='test', password='test')
        
    # testing home url path
    
    def test_home_url(self):
            response = self.client.get('/')
            self.assertEqual(response.status_code, 200)
            
    def test_Signup_url(self):
        response = self.client.get('/Signup')
        self.assertEqual(response.status_code, 200)
        
    def test_login_url(self):
        response = self.client.get('/login')
        self.assertEqual(response.status_code, 200)
        
    def test_required_login_url(self):
        response = self.client.get('/required_login')
        self.assertEqual(response.status_code, 200)
        
    def tearDown(self):
        self.user.delete()
        
        

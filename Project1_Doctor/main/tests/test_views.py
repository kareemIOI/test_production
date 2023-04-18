from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

class LoginTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpass'
        )

    def test_login_success(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': 'testpass'})
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('index'))

    def test_login_failure(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': 'wrongpass'})
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('login'))

class LogoutTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpass'
        )
        self.client.login(username='testuser', password='testpass')

    def test_logout(self):
        response = self.client.get(reverse('logout'))
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('index'))

class RegisterTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_register_success(self):
        response = self.client.post(reverse('register'), {
            'username': 'newuser',
            'first_name': 'New',
            'last_name': 'User',
            'email': 'newuser@example.com',
            'password1': 'newpass',
            'password2': 'newpass'
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('login'))
        self.assertTrue(User.objects.filter(username='newuser').exists())

    def test_register_existing_username(self):
        User.objects.create_user(
            username='existinguser',
            email='existinguser@example.com',
            password='existingpass'
        )
        response = self.client.post(reverse('register'), {
            'username': 'existinguser',
            'first_name': 'Existing',
            'last_name': 'User',
            'email': 'existinguser2@example.com',
            'password1': 'newpass',
            'password2': 'newpass'
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('Signup'))
        self.assertFalse(User.objects.filter(email='existinguser2@example.com').exists())

    def test_register_password_mismatch(self):
        response = self.client.post(reverse('register'), {
            'username': 'newuser',
            'first_name': 'New',
            'last_name': 'User',
            'email': 'newuser@example.com',
            'password1': 'newpass1',
            'password2': 'newpass2'
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('Signup'))
        self.assertFalse(User.objects.filter(username='newuser').exists())


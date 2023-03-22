import unittest
from Employee import Employee

class TestEmployeeCase(unittest.TestCase):
    def setUp(self):
        first_name = "Vladimir"
        last_name = "Putin"
        year_salary = 30000
        self.my = Employee(first_name,last_name,year_salary)
        my = self.my
        
    def test_give_default_raise(self):
        self.my.give_raise()
        self.assertEqual(self.my.give_raise(),35000)

unittest.main()
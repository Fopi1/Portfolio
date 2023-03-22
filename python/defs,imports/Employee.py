class Employee():
    def __init__(self,first_name,last_name,year_salary):
        self.first_name = first_name
        self.last_name = last_name
        self.year_salary = year_salary
        self.increased_salary = 0
    
    def give_raise(self,increase_salary = 5000):
        self.increased_salary = int(self.year_salary+increase_salary)
        increased_salary = self.increased_salary
        print(increased_salary)

da = Employee("Vladimir","Putin",30000)
da.give_raise()
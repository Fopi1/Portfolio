class User:
    def __init__(self,first_name,last_name,age,city):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.city = city
        self.login_attempts = 0

    def describe_user(self):
        name = self.first_name+ " " +self.last_name
        print("Ur name is",name+",","u is",str(self.age),"years old","and u is from the",self.city)
    def greet_user(self):
        name = self.first_name+ " " +self.last_name
        print("We greeting you",name)
    def increment_login_attempts(self,increment):
        self.login_attempts += increment
    def show_login_attempts(self):
        print("Heres ur login attempts",self.login_attempts)
    def reset_login_attempts(self,):
        self.login_attempts = 0

class Admin(User):
    def __init__(self, first_name, last_name, age, city):
        super().__init__(first_name, last_name, age, city)
        self.privileges = Privileges(privileges=["ban","kick"])

class Privileges:
    def __init__(self,privileges):
        self.privileges = privileges
    def show_privileges(self):
        for privilege in self.privileges:
            print("U can",privilege)
    def add_privileges(self):
        if Privileges(privileges=["ban","kick"]):
            Privileges(privileges=self.privileges.append("delete messages"))
    
admin = Admin("Vladimir","Putin","68","Moscow")
admin.privileges.add_privileges()
admin.privileges.show_privileges()
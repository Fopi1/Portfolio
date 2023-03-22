class Restaurant:
    def __init__(self,restaurant_name,cuisine_type):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type
        self.number_served = 0

    def describe_restaurant(self):
        print("The name of restaurant",self.restaurant_name)
        print("It has a",self.cuisine_type,"сuisine type")
    
    def open_restaurant(self):
        print(self.restaurant_name,"is now open")

    def served(self):
        print("Today we have served:",str(self.number_served))
        
    def set_number_served(self,number):
        self.number_served = number

    def increment_number_served(self,increment):
        self.number_served += increment        
    
class IceCreamStand(Restaurant):
    def __init__(self, restaurant_name, cuisine_type,flavors = [""]):
        super().__init__(restaurant_name, cuisine_type)
        self.flavors = flavors
    
    def show_flavors(self):
        for flavor in self.flavors:
            print("We have",flavor,"flavor")
        
ice_cream = IceCreamStand("Cool","nice",flavors=["no","yes"])
ice_cream.show_flavors()
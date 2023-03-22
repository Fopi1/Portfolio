from random import randint
print("How many sides of dice u want?")
how_sides = int(input())
print("\nHow many rolls do u want?")
how_rolls = int(input())
class Dice:
    def __init__(self,sides):
        self.sides = sides
    def roll_dice(self):
        i = 0
        print("\nHeres ur result")
        while i<how_rolls:
            numbers = randint(1,self.sides)
            print(numbers)
            i = i+1
six_sided_dice = Dice(sides=how_sides)
six_sided_dice.roll_dice()
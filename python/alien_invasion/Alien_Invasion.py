import sys
from settings import Settings
import pygame
def run_game():
    settings = Settings()
    pygame.init()
    screen = pygame.display.set_mode((settings.screen_width,settings.screen_height))
    pygame.display.set_caption("Alien Invasion")
    while True:
        for event in pygame.event.get():
            if event == pygame.QUIT:
                sys.exit()
        screen.fill(settings.bg_color)
        pygame.display.flip()
        
run_game()
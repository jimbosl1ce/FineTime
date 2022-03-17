#!/usr/bin/python3
from selenium.webdriver.common.by import By
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
chrome_path = r'/usr/local/bin/chromedriver'
browser = webdriver.Chrome(executable_path=chrome_path)

url = "https://www.sofarsounds.com/cities/la"

browser.get(url)
import time
time.sleep(3)

closeButton = browser.find_element(By.CSS_SELECTOR, 'a[data-qaid*="new-to-sofar-modal-close-button"]')
loadButton = browser.find_element(By.CSS_SELECTOR, 'button[data-qaid*="eventgrid-pagination-load-all-btn"]')
time.sleep(1)
closeButton.click()
time.sleep(1)
loadButton.click()

time.sleep(3)
html = browser.page_source
soup = BeautifulSoup(html, 'lxml')
result = []

city = soup.find("h1", {"data-qaid" :"city-hero-title"}).get_text()
print(city)

for a in soup.select('div[class*="Grid__Col-sc-11vf9b7-0 gSBrwN"]'):
  dict = {}
  dict["city"]=city

  for dateTime in a.select('p[data-qaid*="-event-details"]'):
    text = dateTime.get_text()
    if(len(text)):
      dict["date"] = text

  for neighborhood in a.select('h2[class*="Typography__Title-sc-6hbhp8-0 sc-giadOv fZhoeH"]'):
    text = neighborhood.get_text()
    if(len(text)):
      dict["location"] = text

  for indoorOutdoor in a.select('span[class*="Typography__Overline-sc-6hbhp8-9 sc-cqCuEk fNLgMP"]'):
    text = indoorOutdoor.get_text()
    if(len(text)):
      dict["type"] = text

  for soldOut in a.select('span[class*="Typography__Overline-sc-6hbhp8-9 sc-jVODtj ewGtvP"]'):
    dict["soldOut"] = True

  result.append(dict)

headers = {'Content-Type': 'application/json', 'Accept':'application/json'}

requests.post('http://localhost:3000', data=json.dumps(result), headers=headers)

browser.close()




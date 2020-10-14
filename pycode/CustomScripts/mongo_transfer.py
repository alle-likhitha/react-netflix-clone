from Utils.DButils import DButils
import csv
import pandas as pd
from bs4 import BeautifulSoup
dbutils = DButils()
import urllib.request
from google_images_search import GoogleImagesSearch
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os
import json
import sys
import time

gis = GoogleImagesSearch('AIzaSyBA-68SYUJ9aI6-KKCi3sDaG7w_Wqj2Y5Q', 'drugstore-287316')
_search_params = {
    'q': 'puppies',
    'num': 2,
    'safe': 'high|medium|off',
    'fileType': 'jpg|gif|png',
    'imgType': 'clipart|face|lineart|news|photo',
    'imgSize': 'huge|icon|large|medium|small|xlarge|xxlarge',
    'imgDominantColor': 'black|blue|brown|gray|green|pink|purple|teal|white|yellow',
    'usageRights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived'
}

def transfer_data():
    path = "/Users/likhithaalle/Desktop/DATA/title.akas.tsv"
    data_info = pd.read_csv(path, delimiter="\t")
    data_local = data_info.to_dict(orient='records')
    for d in data_local:
        print(d)
        print("=--==--=")




def crawler():
    base_url = "https://www.webmd.com/drugs/2/alpha/a/"
    # request = urllib.request.Request(base_url)
    contents = urllib.request.urlopen(base_url).read()
    souper = BeautifulSoup(contents)
    souper.prettify()



if __name__ == '__main__':
    # base location # tsv -> mongo
    print("-==-")
    # gis.search(search_params=_search_params)

    # this will search and download:
    gis.search(search_params=_search_params, path_to_dir='../Images')

    # this will search, download and resize:
    # gis.search(search_params=_search_params, path_to_dir='../Images/', width=500, height=500)
    #
    # # search first, then download and resize afterwards:
    # gis.search(search_params=_search_params)
    # for image in gis.results():
    #     image.download('../Images/')
    #     image.resize(500, 500)


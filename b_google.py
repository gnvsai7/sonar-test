#!/usr/bin/python3

from json import dumps

from httplib2 import Http


def main():
    """Hangouts Chat incoming webhook quickstart."""
    url = 'https://chat.googleapis.com/v1/spaces/AAAAOLhTrIc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=GMXe7B_RZHhytW3BdpCxRaNM9xSLG8euPq-Q--WQNFQ%3D'
    bot_message = {
        'text' : 'Current Quality Status is B (Minor). Please fix the blocker bugs. "https://sonarcloud.io/summary/overall?id=gnvsai"'}

    message_headers = {'Content-Type': 'application/json; charset=UTF-8'}

    http_obj = Http()

    response = http_obj.request(
        uri=url,
        method='POST',
        headers=message_headers,
        body=dumps(bot_message),
    )

    print(response)

if __name__ == '__main__':
    main()
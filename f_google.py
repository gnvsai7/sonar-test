#!/usr/bin/python3

from json import dumps

from httplib2 import Http


def main():
    """Hangouts Chat incoming webhook quickstart."""
    url = 'https://chat.googleapis.com/v1/spaces/AAAAqpXX264/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=_lw0BkCYuaxfzURM07fiMTaG55fyepxViFvpz1gBDvU%3D'
    bot_message = {
        'text' : 'Current Quality Status is E (Worst). Please fix the blocker bugs. "https://sonarcloud.io/summary/overall?id=gnvsai"'}

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
import json

def handler(event, context):
    print('received event:')
    print(event)

    # Extract the JSON payload from the request body
    request_body = json.loads(event.get('body', '{}'))

    # Process the received JSON object (you can customize this part)
    # For now, let's just echo back the received object
    response_body = {
        'receivedData': request_body,
        'message': 'Hello from your new Amplify Python lambda!'
    }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            'Content-Type': 'application/json',
        },
        'body': json.dumps(response_body)
    }

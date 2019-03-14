# blogger2firestore
Code to parse a blogger backup file and store it in a Firebase database for use in a new custom application later.


## Configuration

Create a file named config.json and it should contain the Firebase settings.

```

{
    "apiKey": "< YOUR KEY>",
    "authDomain": < YOUR DOMAIN>.firebaseapp.com",
    "databaseURL": "https://< YOUR URL>.firebaseio.com",
    "projectId": "< YOUR PROJECT ID >",
    "storageBucket": "< YOUR PROJECT ID.appspot.com",
    "messagingSenderId": "< YOUR ID>",
    "serviceAccount": {
        "type": "service_account",
        "project_id": "< YOUR PROJECT ID >",
        "private_key_id": "< YOUR KEY ID >",
        "private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-2hup5@< YOUR PROJECT ID >.iam.gserviceaccount.com",
        "client_id": "< YOUR CLIENT ID >",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2hup5%40< YOUR PROJECT ID >.iam.gserviceaccount.com"
    
    }
}

```

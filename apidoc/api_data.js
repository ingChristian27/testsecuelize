define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n'email': 'testingmail@mail.com',\n'password': '123456' \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_profile",
            "description": "<p>Status Profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n{\n'access_token': 'TEST123',\n'user_id': 1,\n'status_profile': 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectPassword",
            "description": "<p>The password is incorrect (We suggest to just respond with invalid username or password - Security Issue -).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Incorrectuser",
            "description": "<p>The username doesn´t exist (We suggest to just respond with invalid username or password - Security Issue -).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredData",
            "description": "<p>Any required input is null or blank.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP 404 Incorrect-Password-Response:",
          "content": "HTTP/1.1 404 - Not Found\n{\n'message': 'Incorrect password!' \n}",
          "type": "json"
        },
        {
          "title": "HTTP 403 Incorrect-User-Response:",
          "content": "HTTP/1.1 403 - Forbidden\n{\n'message': 'User doesn´t exist!' \n}",
          "type": "json"
        },
        {
          "title": "HTTP 400 Required-Data-Response:",
          "content": "HTTP/1.1 400 - Bad Request\n{\n'message': 'email and password are required' \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/car/info/{id}",
    "title": "Get Car Info",
    "name": "Get_Car_Info",
    "group": "Car",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n{\n      \"success\":true,\n      \"car\": {\n          \"id\": 1,\n          \"id_user\": 2,\n          \"number\": \"MUM926\",\n          \"year\": \"2018\",\n          \"make\": \"1\",\n          \"model\": \"Sonic\",\n          \"color\": \"black\",\n          \"plate\": \"AAA\",\n          \"status\": 1,\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No-Data-Response:",
          "content": "  HTTP/1.1 200 - OK\n{\n  \"success\": false,\n  \"message\": \"Car user doesn´t exist!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Car"
  },
  {
    "type": "get",
    "url": "/car_marks",
    "title": "Obtain Car Marks",
    "name": "Obtain_Car_Marks",
    "group": "Car",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n      [\n      {\n          \"id\": 3,\n          \"name\": \"Chevrolet\",\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      },\n      {\n          \"id\": 4,\n          \"name\": \"Mazda\",\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      },\n      {\n          \"id\": 5,\n          \"name\": \"Honda\",\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      },\n      {\n          \"id\": 6,\n          \"name\": \"Hyundai\",\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      },\n      {\n          \"id\": 7,\n          \"name\": \"Nissan\",\n          \"createdAt\": \"2018-01-01T00:00:00.000Z\",\n          \"updatedAt\": \"2018-01-01T00:00:00.000Z\"\n      }\n      ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No-Data-Response:",
          "content": "HTTP/1.1 401 - Unauthorized\n{\n    \"message\": \"I don`t have car marks\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Car"
  },
  {
    "type": "post",
    "url": "/car/add/{id}",
    "title": "Save Car Info Driver",
    "name": "Save_Car_Info_Driver",
    "group": "Car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Car Plate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Car Year.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "make",
            "description": "<p>Make.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>Car model.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Car color.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"number\": \"MUM92\",\"year\": \"2018\",\"make\": \"String\",\"model\": \"String\",\"color\": \"String\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n{\n    \"success\": true,\n    \"insertId\": 21\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User-Not-Found:",
          "content": "HTTP/1.1 404 - Not Found\n{\n    \"details\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "User-Has-Car:",
          "content": "HTTP/1.1 202 - Accepted\n{\n    \"details\": \"This user already have a car\"\n}",
          "type": "json"
        },
        {
          "title": "Plate-Exists:",
          "content": "HTTP/1.1 203 - Non-Authoritative Information\n{\n    \"details\": \"The plate already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Car"
  },
  {
    "type": "get",
    "url": "/countries",
    "title": "Obtain countries",
    "name": "Obtain_countries",
    "group": "Country",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Country"
  },
  {
    "type": "post",
    "url": "/delivery/add",
    "title": "Add Delivery Passenger",
    "name": "Add_Delivery_Passenger",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_details",
            "description": "<p>Package Details.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location_start",
            "description": "<p>Location Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location_end",
            "description": "<p>Location End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude_start",
            "description": "<p>Latitude Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude_start",
            "description": "<p>Longitude Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude_end",
            "description": "<p>Latitude End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude_end",
            "description": "<p>Longitude End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accept_counteroffer",
            "description": "<p>Accept Counteroffer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id_user\": 123,\n  \"package_details\": \"String\",\n  \"location_start\": \"String\",\n  \"location_end\": \"String\",\n  \"latitude_start\": 1,\n  \"latitude_end\": 1,\n  \"price\": 300,\n  \"accept_counteroffer\": \"String\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Delivery"
  },
  {
    "type": "post",
    "url": "/refer_driver",
    "title": "Add Refer Driver",
    "name": "Add_Refer_Driver",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plate",
            "description": "<p>Driver Plate.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "User-Not-Driver:",
          "content": "HTTP/1.1 200 - OK\n{\n    \"success\": false,\n    \"message\": \"User is not a driver!\n}",
          "type": "json"
        },
        {
          "title": "Plate-Not-Found:",
          "content": "HTTP/1.1 200 - OK\n{\n    \"success\": false,\n    \"message\": \"Code driver no found!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/types/add/{id}",
    "title": "Save Type Driver",
    "name": "Save_Type_Driver",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "driver_type",
            "description": "<p>Drivers type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n  {\"driver_type\": 1},{\"driver_type\": 2},{\"driver_type\": 3},{\"driver_type\": 4}\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n{\"success\": true,\"message\": \"Driver types created!\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found. Response body data may not be shown because of 204 return status set</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/favorite/add",
    "title": "Add Favorite Driver",
    "name": "Add_Favorite_Driver",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_passenger",
            "description": "<p>Passenger Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/favorite/add_plate",
    "title": "Add Favorite Driver Plate",
    "name": "Add_Favorite_Driver_Plate",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plate",
            "description": "<p>Driver Plate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_passenger",
            "description": "<p>Passenger Id.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Plate-Not-Found:",
          "content": "HTTP/1.1 200 - OK\n{\n    \"success\": false,\n    \"message\": \"Car do not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/favorite/delete",
    "title": "Delete Favorite Driver",
    "name": "Delete_Favorite_Driver",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_passenger",
            "description": "<p>Passenger Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/favorite/search",
    "title": "Search Favorite Driver",
    "name": "Search_Favorite_Driver",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_passenger",
            "description": "<p>Passenger Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/saved_location",
    "title": "Add Saved Location",
    "name": "Add_Saved_Location",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitud",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitud",
            "description": "<p>Location Longitud.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Location Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/saved_location/{id}",
    "title": "Get Saved Location",
    "name": "Get_Saved_Location",
    "group": "Location",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/location",
    "title": "Send Location Driver",
    "name": "Send_Location_Driver",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>User Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>User Longitude</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/add_payment_method",
    "title": "Add Method Payment",
    "name": "Add_Method_Payment",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nonceFromClient",
            "description": "<p>Client.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/delete_payment",
    "title": "Delete Method Payment",
    "name": "Delete_Method_Payment",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/client",
    "title": "Get Account Payment",
    "name": "Get_Account_Payment",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/history_payment/{id}",
    "title": "Get History payment",
    "name": "Get_History_payment",
    "group": "Payment",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/client_token",
    "title": "Get Token Payment",
    "name": "Get_Token_Payment",
    "group": "Payment",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/client_token_id/{id}",
    "title": "Get Token Payment ID",
    "name": "Get_Token_Payment",
    "group": "Payment",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/user/buytoken",
    "title": "Save Token Payment",
    "name": "Save_Token_Payment",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method_id",
            "description": "<p>Payment Method Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "n_tokes",
            "description": "<p>Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_date",
            "description": "<p>Payment Date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payments",
    "title": "Send Method Payment",
    "name": "Send_Method_Payment",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method_nonce",
            "description": "<p>Payment Method.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Payment amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payments_exist",
    "title": "Send Payment Exists",
    "name": "Send_Payment_Exists",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenPaymentMethod",
            "description": "<p>Payment Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Payment amount</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/resource/add",
    "title": "Upload Video or Image",
    "name": "Upload_Video_or_Image",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>Resource part name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/profile/verify",
    "title": "Verify Type User",
    "name": "Verify_Type_User",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_profile",
            "description": "<p>Profile Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/valoration/{id}/type",
    "title": "Get History Rating User",
    "name": "Get_History_Rating_User",
    "group": "Rating",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Rating"
  },
  {
    "type": "post",
    "url": "/valoration/add",
    "title": "Rating user",
    "name": "Rating_user",
    "group": "Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_drivpass",
            "description": "<p>Passenger Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentary",
            "description": "<p>Commentary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Rating"
  },
  {
    "type": "put",
    "url": "/ride/counteroffer/{idRide}",
    "title": "Counter Offer Ride Driver",
    "name": "Counter_Offer_Ride_Driver",
    "group": "Ride",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Response Body.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "counteroffer",
            "description": "<p>Counter offer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Ride"
  },
  {
    "type": "post",
    "url": "/ride/add",
    "title": "Create Ride Passenger",
    "name": "Create_Ride_Passenger",
    "group": "Ride",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_passenger",
            "description": "<p>Passenger Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location_start",
            "description": "<p>Location Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location_end",
            "description": "<p>Location End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude_start",
            "description": "<p>Latitud Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude_start",
            "description": "<p>Longitude Start.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude_end",
            "description": "<p>Latitude End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude_end",
            "description": "<p>Longitude End.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Ride Price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accept_counteroffer",
            "description": "<p>Does Accept Counteroffer.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Ride"
  },
  {
    "type": "put",
    "url": "/ride/edit/{idRide}",
    "title": "Edit Ride Driver",
    "name": "Edit_Ride_Driver",
    "group": "Ride",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_driver",
            "description": "<p>Driver Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ride_status",
            "description": "<p>Ride Status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Ride"
  },
  {
    "type": "get",
    "url": "/ride/history/{id}",
    "title": "Get All History Ride Passenger",
    "name": "Get_All_History_Ride_Passenger",
    "group": "Ride",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Ride"
  },
  {
    "type": "get",
    "url": "/ride/history_favorite/{id}",
    "title": "Get Favorite History Rides Passenger",
    "name": "Get_Favorite_History_Rides_Passenger",
    "group": "Ride",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Ride"
  },
  {
    "type": "get",
    "url": "/me/{userType}",
    "title": "Obtain type User",
    "name": "Obtain_type_User",
    "group": "User",
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "Register",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Users name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Users phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Users city.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 - OK\n  {\n    success: true,\n    message: \"User created!\",\n    insertId: post.id,\n    access_token: acces token\n  }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 203 - OK\n{\n  \"message\": \"This email is already registered\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"UserNotFound\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/edit/{id}",
    "title": "Update Reg Id",
    "name": "Update_Reg_Id",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reg_id",
            "description": "<p>Reg Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/edit{id}",
    "title": "Update User Field",
    "name": "Update_User_Field",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>Resource part name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "UserImage",
            "description": "<p>map of UserImage maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserImage.id",
            "description": "<p>Id of UserImage properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserImage.image",
            "description": "<p>Image of UserImage properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "UserVideo",
            "description": "<p>map of UserVideo maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserVideo.id",
            "description": "<p>Id of UserVideo properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserVideo.video",
            "description": "<p>Video of UserVideo properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "UserStatus",
            "description": "<p>map of UserStatus maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserStatus.id",
            "description": "<p>Id of UserStatus properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserStatus.status_profile",
            "description": "<p>Status of UserStatus properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "BToken",
            "description": "<p>map of BToken maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BToken.id",
            "description": "<p>Id of BToken properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BToken.btoken",
            "description": "<p>btoken of BToken properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Profile",
            "description": "<p>map of Profile maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profile.phone",
            "description": "<p>Phone of Profile properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profile.name",
            "description": "<p>Name of Profile properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profile.email",
            "description": "<p>Email of Profile properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "LedProfile",
            "description": "<p>map of LedProfile maps</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LedProfile.id",
            "description": "<p>Id of LedProfile properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LedProfile.led_status",
            "description": "<p>Led Status of LedProfile properties</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/profile",
    "title": "Update type User",
    "name": "Update_type_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>Users id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_profile",
            "description": "<p>Users profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "User"
  }
] });

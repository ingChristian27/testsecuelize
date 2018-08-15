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
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/car_marks",
    "title": "Obtain Car Marks",
    "name": "Obtain_Car_Marks",
    "group": "Car",
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
            "description": "<p>Car number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
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
      }
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
      }
    },
    "version": "0.0.0",
    "filename": "server/apidoc.js",
    "groupTitle": "Driver"
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
          "content": "HTTP/1.1 200 OK\n  {\n    success: true,\n    message: \"User created!\",\n    insertId: post.id,\n    access_token: acces token\n  }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 203 OK\n{\n  \"message\": \"This email is already registered\"\n}",
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
            "type": "Object",
            "optional": false,
            "field": "UserImage.id",
            "description": "<p>Id of UserImage properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
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
            "type": "Object",
            "optional": false,
            "field": "UserVideo.id",
            "description": "<p>Id of UserVideo properties</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "UserVideo.video",
            "description": "<p>Video of UserVideo properties</p>"
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

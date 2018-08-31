/**
    * @api {post} /login Login
    * @apiName Login
    * @apiGroup Authentication
    *
    * @apiParam {String} email Users email.
    * @apiParam {String} password Users password.
    * @apiParamExample {json} Request-Example:
    * {
    * 'email': 'testingmail@mail.com',
    * 'password': '123456' 
    * }
    * 
    * @apiSuccess {String} access_token Access Token.
    * @apiSuccess {Integer} user_id User Id.
    * @apiSuccess {Integer} status_profile Status Profile.
    * 
    * @apiSuccessExample Success-Response:
    * HTTP/1.1 200 - OK
    * {
    * 'access_token': 'TEST123',
    * 'user_id': 1,
    * 'status_profile': 1
    * }
    * 
    * @apiError IncorrectPassword The password is incorrect (We suggest to just respond with invalid username or password - Security Issue -).
    * @apiError Incorrectuser The username doesn´t exist (We suggest to just respond with invalid username or password - Security Issue -).
    * @apiError RequiredData Any required input is null or blank.
    * 
    * @apiErrorExample HTTP 404 Incorrect-Password-Response:
    * HTTP/1.1 404 - Not Found
    * {
    * 'message': 'Incorrect password!' 
    * }
    * 
    * @apiErrorExample HTTP 403 Incorrect-User-Response:
    * HTTP/1.1 403 - Forbidden
    * {
    * 'message': 'User doesn´t exist!' 
    * }
    * 
    *
    * @apiErrorExample HTTP 400 Required-Data-Response:
    * HTTP/1.1 400 - Bad Request
    * {
    * 'message': 'email and password are required' 
    * }
    * 
*/

/**
    * @api {get} /car/info/{id} Get Car Info
    * @apiName Get Car Info
    * @apiGroup Car
    * @apiSuccessExample Success-Response:
    * HTTP/1.1 200 - OK
    * {
    *       "success":true,
    *       "car": {
    *           "id": 1,
    *           "id_user": 2,
    *           "number": "MUM926",
    *           "year": "2018",
    *           "make": "1",
    *           "model": "Sonic",
    *           "color": "black",
    *           "plate": "AAA",
    *           "status": 1,
    *           "createdAt": "2018-01-01T00:00:00.000Z",
    *           "updatedAt": "2018-01-01T00:00:00.000Z"
    *       }
    *   }
    * 
    @apiErrorExample No-Data-Response:
    *   HTTP/1.1 200 - OK
    * {
    *   "success": false,
    *   "message": "Car user doesn´t exist!"
    * }
    * 
*/

/**
    * @api {get} /car_marks Obtain Car Marks
    * @apiName Obtain Car Marks
    * @apiGroup Car
    * @apiSuccessExample Success-Response:
    *   HTTP/1.1 200 - OK
        [
        {
            "id": 3,
            "name": "Chevrolet",
            "createdAt": "2018-01-01T00:00:00.000Z",
            "updatedAt": "2018-01-01T00:00:00.000Z"
        },
        {
            "id": 4,
            "name": "Mazda",
            "createdAt": "2018-01-01T00:00:00.000Z",
            "updatedAt": "2018-01-01T00:00:00.000Z"
        },
        {
            "id": 5,
            "name": "Honda",
            "createdAt": "2018-01-01T00:00:00.000Z",
            "updatedAt": "2018-01-01T00:00:00.000Z"
        },
        {
            "id": 6,
            "name": "Hyundai",
            "createdAt": "2018-01-01T00:00:00.000Z",
            "updatedAt": "2018-01-01T00:00:00.000Z"
        },
        {
            "id": 7,
            "name": "Nissan",
            "createdAt": "2018-01-01T00:00:00.000Z",
            "updatedAt": "2018-01-01T00:00:00.000Z"
        }
        ]
    * 
    @apiErrorExample No-Data-Response:
    *   HTTP/1.1 401 - Unauthorized
    *   {
    *       "message": "I don`t have car marks"
    *   }
*/

/**
    * @api {post} /car/add/{id} Save Car Info Driver
    * @apiName Save Car Info Driver
    * @apiGroup Car
    *
    * @apiParam {String} number Car Plate.
    * @apiParam {String} year Car Year.
    * @apiParam {String} make Make.
    * @apiParam {String} model Car model.
    * @apiParam {String} color Car color.
    * 
    * @apiParamExample {json} Request-Example:
    * {"number": "MUM92","year": "2018","make": "String","model": "String","color": "String"}
    * 
    * @apiSuccessExample Success-Response:
    *   HTTP/1.1 200 - OK
    *   {
    *       "success": true,
    *       "insertId": 21
    *   }
    * 
    * @apiErrorExample User-Not-Found:
    *   HTTP/1.1 404 - Not Found
    *   {
    *       "details": "user not found"
    *   }
    * 
    * @apiErrorExample User-Has-Car:
    *   HTTP/1.1 202 - Accepted
    *   {
    *       "details": "This user already have a car"
    *   }
    * 
    * @apiErrorExample Plate-Exists:
    *   HTTP/1.1 203 - Non-Authoritative Information
    *   {
    *       "details": "The plate already exists"
    *   }
*/

/**
    * @api {get} /countries Obtain countries
    * @apiName Obtain countries
    * @apiGroup Country
*/

/**
    * @api {post} /delivery/add Add Delivery Passenger
    * @apiName Add Delivery Passenger
    * @apiGroup Delivery
    * 
    * @apiParam {String} id_user User Id.
    * @apiParam {String} package_details Package Details.
    * @apiParam {String} location_start Location Start.
    * @apiParam {String} location_end Location End.
    * @apiParam {String} latitude_start Latitude Start.
    * @apiParam {String} longitude_start Longitude Start.
    * @apiParam {String} latitude_end Latitude End.
    * @apiParam {String} longitude_end Longitude End.
    * @apiParam {String} price Price.
    * @apiParam {String} accept_counteroffer Accept Counteroffer.
    * 
    * @apiParamExample {json} Request-Example:
    * {
    *   "id_user": 123,
    *   "package_details": "String",
    *   "location_start": "String",
    *   "location_end": "String",
    *   "latitude_start": 1,
    *   "latitude_end": 1,
    *   "price": 300,
    *   "accept_counteroffer": "String"
    * }
    *
*/

/**
    * @api {post} /refer_driver Add Refer Driver
    * @apiName Add Refer Driver
    * @apiGroup Driver
    * 
    * @apiParam {String} id_driver Driver Id.
    * @apiParam {String} plate Driver Plate.
    * 
    * @apiErrorExample User-Not-Driver:
    *   HTTP/1.1 200 - OK
    *   {
    *       "success": false,
    *       "message": "User is not a driver!
    *   }
    * 
    * @apiErrorExample Plate-Not-Found:
    *   HTTP/1.1 200 - OK
    *   {
    *       "success": false,
    *       "message": "Code driver no found!"
    *   }
*/

/**
    * @api {post} /types/add/{id} Save Type Driver
    * @apiName Save Type Driver
    * @apiGroup Driver
    *
    * @apiParam {List} driver_type Drivers type.
    * 
    * @apiParamExample {json} Request-Example:
    * [
    *   {"driver_type": 1},{"driver_type": 2},{"driver_type": 3},{"driver_type": 4}
    * ]
    * 
    * @apiSuccessExample Success-Response:
    *   HTTP/1.1 200 - OK
    *   {"success": true,"message": "Driver types created!"}
    * 
    * @apiError UserNotFound User not found. Response body data may not be shown because of 204 return status set
    
*/

/**
    * @api {post} /favorite/add_plate Add Favorite Driver Plate
    * @apiName Add Favorite Driver Plate
    * @apiGroup Favorite
    * 
    * @apiParam {String} plate Driver Plate.
    * @apiParam {String} id_passenger Passenger Id.
    * 
    * @apiErrorExample Plate-Not-Found:
    *   HTTP/1.1 200 - OK
    *   {
    *       "success": false,
    *       "message": "Car do not exist"
    *   }
*/










/**
    * @api {post} /user/add Register
    * @apiName Register
    * @apiGroup User
    *
    * @apiParam {String} name Users name.
    * @apiParam {String} phone Users phone.
    * @apiParam {String} email Users email.
    * @apiParam {String} city Users city.
    *
    * @apiSuccess {String} firstname Firstname of the User.
    * @apiSuccess {String} lastname  Lastname of the User.
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 - OK
    *       {
    *         success: true,
    *         message: "User created!",
    *         insertId: post.id,
    *         access_token: acces token
    *       }
    * 
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 203 - OK
    *     {
    *       "message": "This email is already registered"
    *     }
    * 
    * @apiError UserNotFound The id of the User was not found.
    *
    * @apiErrorExample Error-Response:
    *   HTTP/1.1 404 Not Found
    *     {
    *       "error": "UserNotFound"
    *     }
*/

/**
    * @api {post} /user/profile Update type User
    * @apiName Update type User
    * @apiGroup User
    *
    * @apiParam {String} id_user Users id.
    * @apiParam {String} id_profile Users profile.
*/

/**
    * @api {get} /me/{userType} Obtain type User
    * @apiName Obtain type User
    * @apiGroup User
*/

/**
    * @api {put} /user/edit/{id} Update Reg Id
    * @apiName Update Reg Id
    * @apiGroup User
    *
    * @apiParam {String} reg_id Reg Id.
*/

/**
    * @api {post} /location Send Location Driver
    * @apiName Send Location Driver
    * @apiGroup Location
    *
    * @apiParam {String} id_user User Id
    * @apiParam {String} user_type User Type
    * @apiParam {String} latitude User Latitude
    * @apiParam {String} longitude User Longitude
*/

/**
    * @api {post} /ride/add Create Ride Passenger
    * @apiName Create Ride Passenger
    * @apiGroup Ride
    *
    * @apiParam {String} id_passenger Passenger Id.
    * @apiParam {String} location_start Location Start.
    * @apiParam {String} location_end Location End.
    * @apiParam {String} latitude_start Latitud Start.
    * @apiParam {String} longitude_start Longitude Start.
    * @apiParam {String} latitude_end Latitude End.
    * @apiParam {String} longitude_end Longitude End.
    * @apiParam {String} price Ride Price.
    * @apiParam {String} accept_counteroffer Does Accept Counteroffer.
*/

/**
    * @api {post} /profile/verify Verify Type User
    * @apiName Verify Type User
    * @apiGroup Profile
    *
    * @apiParam {String} id_user User Id.
    * @apiParam {String} id_profile Profile Id.
*/

/**
    * @api {post} /resource/add Upload Video or Image
    * @apiName Upload Video or Image
    * @apiGroup Profile
    *
    * @apiParam {String} resource Resource part name.
*/

/**
    * @api {put} /user/edit{id} Update User Field
    * @apiName Update User Field
    * @apiGroup User
    *
    * @apiParam {String} resource Resource part name.
    * @apiParam {Object} UserImage map of UserImage maps
    * @apiParam {String} UserImage.id Id of UserImage properties
    * @apiParam {String} UserImage.image Image of UserImage properties
    * @apiParam {Object} UserVideo map of UserVideo maps
    * @apiParam {String} UserVideo.id Id of UserVideo properties
    * @apiParam {String} UserVideo.video Video of UserVideo properties
    * @apiParam {Object} UserStatus map of UserStatus maps
    * @apiParam {String} UserStatus.id Id of UserStatus properties
    * @apiParam {String} UserStatus.status_profile Status of UserStatus properties
    * @apiParam {Object} BToken map of BToken maps
    * @apiParam {String} BToken.id Id of BToken properties
    * @apiParam {String} BToken.btoken btoken of BToken properties
    * @apiParam {Object} Profile map of Profile maps
    * @apiParam {String} Profile.phone Phone of Profile properties
    * @apiParam {String} Profile.name Name of Profile properties
    * @apiParam {String} Profile.email Email of Profile properties
    * @apiParam {Object} LedProfile map of LedProfile maps
    * @apiParam {String} LedProfile.id Id of LedProfile properties
    * @apiParam {String} LedProfile.led_status Led Status of LedProfile properties
*/

/**
    * @api {put} /ride/counteroffer/{idRide} Counter Offer Ride Driver
    * @apiName Counter Offer Ride Driver
    * @apiGroup Ride
    *
    * @apiParam {String} id_driver Driver Id.
    * @apiParam {String} response Response Body.
    * @apiParam {String} counteroffer Counter offer
*/

/**
    * @api {put} /ride/edit/{idRide} Edit Ride Driver
    * @apiName Edit Ride Driver
    * @apiGroup Ride
    *
    * @apiParam {String} id_driver Driver Id.
    * @apiParam {String} ride_status Ride Status.
*/

/**
    * @api {post} /valoration/add Rating user
    * @apiName Rating user
    * @apiGroup Rating
    *
    * @apiParam {String} id_user User Id.
    * @apiParam {String} id_drivpass Passenger Id.
    * @apiParam {String} commentary Commentary.
    * @apiParam {String} rating Rating.
    * @apiParam {String} type Type.
*/

/**
    * @api {get} /client_token Get Token Payment
    * @apiName Get Token Payment
    * @apiGroup Payment
*/

/**
    * @api {get} /client_token_id/{id} Get Token Payment ID
    * @apiName Get Token Payment
    * @apiGroup Payment
*/

/**
    * @api {post} /payments Send Method Payment
    * @apiName Send Method Payment
    * @apiGroup Payment
    *
    * @apiParam {String} payment_method_nonce Payment Method.
    * @apiParam {String} amount Payment amount.
    * @apiParam {String} name User name.
    * @apiParam {String} email User email.
    * @apiParam {String} phone User phone.
    * @apiParam {String} lastname User lastname.
*/

/**
    * @api {post} /payments_exist Send Payment Exists
    * @apiName Send Payment Exists
    * @apiGroup Payment
    *
    * @apiParam {String} tokenPaymentMethod Payment Token.
    * @apiParam {String} amount Payment amount
*/

/**
    * @api {post} /client Get Account Payment
    * @apiName Get Account Payment
    * @apiGroup Payment
    *
    * @apiParam {String} customerId Customer Id.
*/

/**
    * @api {post} /add_payment_method Add Method Payment
    * @apiName Add Method Payment
    * @apiGroup Payment
    *
    * @apiParam {String} nonceFromClient Client.
    * @apiParam {String} customerId Customer Id.
    * @apiParam {String} amount Amount.
*/

/**
    * @api {post} /delete_payment Delete Method Payment
    * @apiName Delete Method Payment
    * @apiGroup Payment
    *
    * @apiParam {String} token Token.
*/

/**
    * @api {post} /user/buytoken Save Token Payment
    * @apiName Save Token Payment
    * @apiGroup Payment
    *
    * @apiParam {String} payment_method_id Payment Method Id.
    * @apiParam {String} n_tokes Token.
    * @apiParam {String} total Total.
    * @apiParam {String} user_id User Id.
    * @apiParam {String} payment_date Payment Date.
*/

/**
    * @api {get} /history_payment/{id} Get History payment
    * @apiName Get History payment
    * @apiGroup Payment
*/

/**
    * @api {get} /saved_location/{id} Get Saved Location
    * @apiName Get Saved Location
    * @apiGroup Location
*/

/**
    * @api {post} /saved_location Add Saved Location
    * @apiName Add Saved Location
    * @apiGroup Location
    * 
    * @apiParam {String} name Location Name.
    * @apiParam {String} latitud Location latitude.
    * @apiParam {String} longitud Location Longitud.
    * @apiParam {String} description Location Description.
    * @apiParam {String} user_id User Id.
*/

/**
    * @api {get} /valoration/{id}/type Get History Rating User
    * @apiName Get History Rating User
    * @apiGroup Rating
*/

/**
    * @api {post} /favorite/add Add Favorite Driver
    * @apiName Add Favorite Driver
    * @apiGroup Favorite
    * 
    * @apiParam {String} id_passenger Passenger Id.
    * @apiParam {String} id_driver Driver Id.
*/

/**
    * @api {post} /favorite/search Search Favorite Driver
    * @apiName Search Favorite Driver
    * @apiGroup Favorite
    * 
    * @apiParam {String} id_passenger Passenger Id.
    * @apiParam {String} id_driver Driver Id.
*/

/**
    * @api {post} /favorite/delete Delete Favorite Driver
    * @apiName Delete Favorite Driver
    * @apiGroup Favorite
    * 
    * @apiParam {String} id_passenger Passenger Id.
    * @apiParam {String} id_driver Driver Id.
*/

/**
    * @api {get} /ride/history/{id} Get All History Ride Passenger
    * @apiName Get All History Ride Passenger
    * @apiGroup Ride
*/

/**
    * @api {get} /ride/history_favorite/{id} Get Favorite History Rides Passenger
    * @apiName Get Favorite History Rides Passenger
    * @apiGroup Ride
*/
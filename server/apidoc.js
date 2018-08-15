/**
    * @api {post} /login Login
    * @apiName Login
    * @apiGroup Authentication
    *
    * @apiParam {String} email Users email.
    * @apiParam {String} password Users password.
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
    *     HTTP/1.1 200 OK
    *       {
    *         success: true,
    *         message: "User created!",
    *         insertId: post.id,
    *         access_token: acces token
    *       }
    * 
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 203 OK
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
    * @api {post} /types/add/{id} Save Type Driver
    * @apiName Save Type Driver
    * @apiGroup Driver
    *
    * @apiParam {List} driver_type Drivers type.
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
    * @api {get} /countries Obtain countries
    * @apiName Obtain countries
    * @apiGroup Country
*/

/**
    * @api {get} /car_marks Obtain Car Marks
    * @apiName Obtain Car Marks
    * @apiGroup Car
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
    * @api {post} /car/add/{id} Save Car Info Driver
    * @apiName Save Car Info Driver
    * @apiGroup Car
    *
    * @apiParam {String} number Car number.
    * @apiParam {String} year Year.
    * @apiParam {String} make Make.
    * @apiParam {String} model Car model.
    * @apiParam {String} color Car color.
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
    * @apiParam {Object} UserImage.id Id of UserImage properties
    * @apiParam {Object} UserImage.image Image of UserImage properties
    * @apiParam {Object} UserVideo map of UserVideo maps
    * @apiParam {Object} UserVideo.id Id of UserVideo properties
    * @apiParam {Object} UserVideo.video Video of UserVideo properties
    * @apiParam {Object} UserStatus map of UserStatus maps
    * @apiParam {Object} UserStatus.id Id of UserStatus properties
    * @apiParam {Object} UserStatus.status_profile Status of UserStatus properties
    * @apiParam {Object} BToken map of BToken maps
    * @apiParam {Object} BToken.id Id of BToken properties
    * @apiParam {Object} BToken.btoken btoken of BToken properties
    * @apiParam {Object} Profile map of Profile maps
    * @apiParam {Object} Profile.phone Phone of Profile properties
    * @apiParam {Object} Profile.name Name of Profile properties
    * @apiParam {Object} Profile.email Email of Profile properties
    * @apiParam {Object} LedProfile map of LedProfile maps
    * @apiParam {Object} LedProfile.id Id of LedProfile properties
    * @apiParam {Object} LedProfile.led_status Led Status of LedProfile properties
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
    * @api {post} /favorite/add_plate Add Favorite Driver Plate
    * @apiName Add Favorite Driver Plate
    * @apiGroup Favorite
    * 
    * @apiParam {String} plate Driver Plate.
    * @apiParam {String} id_passenger Passenger Id.
*/

/**
    * @api {post} /refer_driver Add Reder Driver
    * @apiName Add Reder Driver
    * @apiGroup Driver
    * 
    * @apiParam {String} id_driver Driver Id.
    * @apiParam {String} plate Driver Plate.
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
*/

/**
    * @api {get} /car/info{id} Get Car Info
    * @apiName Get Car Info
    * @apiGroup Car
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
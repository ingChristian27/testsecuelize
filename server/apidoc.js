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
    */
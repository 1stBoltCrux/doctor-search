# Doctor Search

#### A brief program description

A website to search for information on doctors.

#### By _**Ted Leary**_

## Description

This webpage will allow a user to search through BetterDoctor's API and find information about doctors and their practices.

#### Specifications

| Specification | Input | Output |
| --- | --- | --- |
| The program will make a call to the BetterDoctor API and return information| Input:https://api.betterdoctor.com/2016-03-01/doctors?name=paul&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=76773493dc43790b2f7bbcb11b51a0b3 | Output: A JSON file with doctor information |
| The program will search through BetterDoctor's JSON file for medical issue and return a list of doctors.| Input: Acne | Output: a list of doctors that can treat acne |
| The program will search through BetterDoctor's JSON file for a doctor of a specific name in the Portland area.| Input: Dr. Dave | Output: info on Dr. Dave's practice in Portland|
| The program will search through BetterDoctor's JSON file and fish out a doctor's first and last name, the practice address, phone number, website and whether or not the doctor is accepting new patients| Input: Dr. Dave | Output: Dave, Davidson, 321 East Burnside St, drdave.com, currently accepting new patients
| The program will display an error message if the api call fails| Input: failure | Output: error! 404|
| If the search criteria returns nothing the program will notify the user that their search criteria has returned no doctors. | Input: Dr. Kozlovozikovinosz | Output: Your search criteria yielded no results!|

## Setup/Installation Requirements

* Install program by cloning this repository.
* Open index.html in browser.

## Known Bugs

N/A

## Support and contact details

For Support, contact:
N/A

## Technologies Used

* HTML
* CSS _(Bootstrap)_
* JavaScript _(jQuery)_
* Node
* Webpack


### License

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2018 **Ted Leary**

import React from "react";
import {reduxForm} from "redux-form";
import {Security} from "./Security";


export const SecurityComponentForm = reduxForm({form: 'security'})(Security);


import React from "react";
import { base } from "../constants";
import { Timeline } from 'react-twitter-widgets'

const Twitter = () => (
    <Timeline
    dataSource={{ sourceType: "profile", screenName: base.twitter }}
    options={{ width: "350", height: "400" }}
  />
);

export default Twitter
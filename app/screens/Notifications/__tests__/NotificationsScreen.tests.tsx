import React from "react";
import { create } from "react-test-renderer";

import NotificationsScreen from "../NotificationsScreen";

it.skip("NotificationsScreen renders correctly", () => {
  const tree = create(<NotificationsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

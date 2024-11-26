import React from "react";
import AdminRequestsTable from "main/components/Admin/AdminRequestsTable";
import { allRecommendationRequestsFixtures } from "fixtures/allRecommendationRequestsFixtures";
import { currentUserFixtures } from "fixtures/currentUserFixtures";

export default {
  title: "components/Admin/AdminRequestsTable",
  component: AdminRequestsTable,
};

const Template = (args) => {
  return <AdminRequestsTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  requests: [],
};

export const ThreeItemsAdminUser = Template.bind({});

ThreeItemsAdminUser.args = {
  requests: allRecommendationRequestsFixtures.threeRequests,
  currentUser: currentUserFixtures.adminUser,
};
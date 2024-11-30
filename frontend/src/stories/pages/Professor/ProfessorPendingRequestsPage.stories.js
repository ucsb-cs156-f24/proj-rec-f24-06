import React from "react";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { http, HttpResponse } from "msw";

import ProfessorPendingRequestsPage from "main/pages/Professor/ProfessorPendingRequestsPage";

export default {
  title: "pages/Professor/ProfessorPendingRequestsPage",
  component: ProfessorPendingRequestsPage,
};

const Template = () => <ProfessorPendingRequestsPage storybook={true} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    http.get("/api/currentUser", () => {
      return HttpResponse.json(apiCurrentUserFixtures.userOnly, {
        status: 200,
      });
    }),
    http.get("/api/systemInfo", () => {
      return HttpResponse.json(systemInfoFixtures.showingNeither, {
        status: 200,
      });
    }),
  ],
};
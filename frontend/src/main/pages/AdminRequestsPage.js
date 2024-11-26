import React from "react";
import { useBackend } from "main/utils/useBackend";

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import AllRecommendationRequestsTable from "main/components/Admin/AdminRequestsTable";
import { useCurrentUser } from "main/utils/currentUser";

export default function AdminRequestsPage() {
  // Stryker disable all : placeholder for future implementation
  const currentUser = useCurrentUser();

  const {
    data: requests,
    error: _error,
    status: _status,
  } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ["/api/recommendationrequest/all"],
    { method: "GET", url: "/api/recommendationrequest/all" },
    [],
  );

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>All Recommendation Requests</h1>
        <AllRecommendationRequestsTable
          requests={requests}
          currentUser={currentUser}
        />
      </div>
    </BasicLayout>
  );
}
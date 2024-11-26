const allRecommendationRequestsFixtures = {
    oneRequest: {
      id: 1,
      professorName: "professor",
      professorEmail: "professor@ucsb.edu",
      requesterName: "tom",
      recommendationType: "Type",
      details: "details",
      completionDate: "2024-11-13T12:12:12",
    },
    threeRequests: [
      {
        id: 1,
        professorName: "professor",
        professorEmail: "professor@ucsb.edu",
        requesterName: "tom",
        recommendationType: "Type",
        details: "details1",
        completionDate: "2024-11-13T12:12:12",
      },
      {
        id: 2,
        professorName: "professor",
        professorEmail: "professor@ucsb.edu",
        requesterName: "bob",
        recommendationType: "Type2",
        details: "details2",
        completionDate: "2024-11-13T12:12:12",
      },
      {
        id: 3,
        professorName: "professor",
        professorEmail: "professor@ucsb.edu",
        requesterName: "fred",
        recommendationType: "Type3",
        details: "details3",
        completionDate: "2024-11-13T12:12:12",
      },
    ],
  };

  export { allRecommendationRequestsFixtures };
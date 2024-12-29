import React, { memo } from "react";

import styled from "styled-components";

import NewMemberDashBoard from "./NewMemberDashBoard";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = memo(() => {
  return (
    <DashboardContainer>
      <NewMemberDashBoard />
    </DashboardContainer>
  );
});

export default Dashboard;

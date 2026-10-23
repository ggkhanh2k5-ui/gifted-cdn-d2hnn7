import React from "react";
import { Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="h6">User not found.</Typography>;
  }

  return (
    <div className="user-detail-container" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>

      <Typography variant="body1" paragraph style={{ marginTop: "16px" }}>
        <strong>Occupation:</strong> {user.occupation}
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Location:</strong> {user.location}
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>About:</strong> {user.description}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${userId}`}
        style={{ marginTop: "10px" }}
      >
        VIEW PHOTOS
      </Button>
    </div>
  );
}

export default UserDetail;
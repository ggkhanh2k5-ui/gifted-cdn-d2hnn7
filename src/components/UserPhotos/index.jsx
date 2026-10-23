import React from "react";
import { 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  Divider 
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

import kenobi1 from "../../images/kenobi1.jpg";
import kenobi2 from "../../images/kenobi2.jpg";
import kenobi3 from "../../images/kenobi3.jpg";
import kenobi4 from "../../images/kenobi4.jpg";
import ludgate1 from "../../images/ludgate1.jpg";
import malcolm1 from "../../images/malcolm1.jpg";
import malcolm2 from "../../images/malcolm2.jpg";
import ouster from "../../images/ouster.jpg";
import ripley1 from "../../images/ripley1.jpg";
import ripley2 from "../../images/ripley2.jpg";
import took1 from "../../images/took1.jpg";
import took2 from "../../images/took2.jpg";

const photoImages = {
  "kenobi1.jpg": kenobi1,
  "kenobi2.jpg": kenobi2,
  "kenobi3.jpg": kenobi3,
  "kenobi4.jpg": kenobi4,
  "ludgate1.jpg": ludgate1,
  "malcolm1.jpg": malcolm1,
  "malcolm2.jpg": malcolm2,
  "ouster.jpg": ouster,
  "ripley1.jpg": ripley1,
  "ripley2.jpg": ripley2,
  "took1.jpg": took1,
  "took2.jpg": took2,
};

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return <Typography variant="h6">This user has no photos.</Typography>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "30px" }}>
          
          <CardMedia
            component="img"
            image={photoImages[photo.file_name]} 
            alt="User uploaded"
            style={{ maxHeight: "500px", objectFit: "contain", backgroundColor: "#f5f5f5" }}
          />
          
          <CardContent>
            <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
              Posted: {new Date(photo.date_time).toLocaleString("en-US")}
            </Typography>

            <Typography variant="subtitle1" style={{ marginTop: "15px", fontWeight: "bold" }}>
              Comments:
            </Typography>
            
            {photo.comments && photo.comments.length > 0 ? (
              <List>
                {photo.comments.map((comment) => (
                  <React.Fragment key={comment._id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Link 
                            to={`/users/${comment.user._id}`} 
                            style={{ textDecoration: 'none', fontWeight: 'bold', color: '#1976d2' }}
                          >
                            {comment.user.first_name} {comment.user.last_name}
                          </Link>
                        }
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="textPrimary" display="block">
                              {comment.comment}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {new Date(comment.date_time).toLocaleString("en-US")}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
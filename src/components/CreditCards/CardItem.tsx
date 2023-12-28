import { Card, CardContent, Typography } from "@mui/material";

export const CardItem: React.FC<{ cardDetails: ICardDetails }> = ({ cardDetails }) => {
  console.log(cardDetails);
  return (
    <Card variant="outlined" style={{ maxWidth: 300 }}>
    <CardContent>
      <img src={cardDetails.image} alt='card_bg' style={{ maxWidth: '100%', height: 'auto' }} />
      <Typography variant="h6">{cardDetails.type}</Typography>
      <Typography variant="body1">{cardDetails.number}</Typography>
      <Typography variant="body2">{cardDetails.currency}</Typography>
      <Typography variant="body2">{cardDetails.masked}</Typography>
    </CardContent>
  </Card>
  ); 
};
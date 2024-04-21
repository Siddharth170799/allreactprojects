// // import * as React from 'react';
// // import Box from '@mui/joy/Box';
// // import Card from '@mui/joy/Card';
// // import CardCover from '@mui/joy/CardCover';
// // import CardContent from '@mui/joy/CardContent';
// // import Typography from '@mui/joy/Typography';

// // export default function MediaCover() {
// //   return (
// //     <Box
// //       component="ul"
// //       sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
// //     >
// //       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
// //         <CardCover>
// //           {/* <img
// //             src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
// //             srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
// //             loading="lazy"
// //             alt=""
// //           /> */}
// //         </CardCover>
// //         <CardContent>
// //           <Typography
// //             level="body-lg"
// //             fontWeight="lg"
// //             textColor="#fff"
// //             mt={{ xs: 12, sm: 18 }}
// //           >
// //             Image
// //           </Typography>
// //         </CardContent>
// //       </Card>
// //       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
// //         <CardCover>
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             poster="https://assets.codepen.io/6093409/river.jpg"
// //           >
// //             <source
// //               src="https://assets.codepen.io/6093409/river.mp4"
// //               type="video/mp4"
// //             />
// //           </video>
// //         </CardCover>
// //         <CardContent>
// //           <Typography
// //             level="body-lg"
// //             fontWeight="lg"
// //             textColor="#fff"
// //             mt={{ xs: 12, sm: 18 }}
// //           >
// //             Video
// //           </Typography>
// //         </CardContent>
// //       </Card>
// //     </Box>
// //   );
// // }
// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';

// export default function MediaCover() {
//   return (
//     <Box
//       component="ul"
//       sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
//     >
//       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//         <CardCover>
//           {/* <img
//             src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
//             srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
//             loading="lazy"
//             alt=""
//           /> */}
//         </CardCover>
//         <CardContent>
//           <Typography
//             level="body-lg"
//             fontWeight="lg"
//             textColor="#fff"
//             mt={{ xs: 12, sm: 18 }}
//           >
//             Image
//           </Typography>
//         </CardContent>
//       </Card>
//       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//         <CardCover sx={{ position: 'relative', paddingTop: '56.25%' }}>
//           <video
//             autoPlay
//             loop
//             muted
//             poster="https://assets.codepen.io/6093409/river.jpg"
//             style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
//           >
//             <source
//               src="https://assets.codepen.io/6093409/river.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </CardCover>
//         <CardContent>
//           <Typography
//             level="body-lg"
//             fontWeight="lg"
//             textColor="#fff"
//             mt={{ xs: 12, sm: 18 }}
//           >
//             Video
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      {/* <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card> */}
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}


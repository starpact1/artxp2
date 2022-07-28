import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { InlineShareButtons } from 'sharethis-reactjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: "4px",
  boxShadow: 24,
  py: "50px",
  px: "24px",
  width: "50%",
  maxWidth: "450px"
};

const { forwardRef, useRef, useImperativeHandle } = React;


const SocialShare = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({

    getAlert() {
      handleOpen()
    }

  }));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }}>
            <ClearIcon />
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", gap:"8px", border: "none" }}>
            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'facebook',
                  'twitter',
                  

                ],
                padding: 48,          // padding within buttons (INTEGER)
                radius: 4,            // the corner radius on each button (INTEGER)
                show_total: false,
                size: 40,
                // width: 60,             // the size of each button (INTEGER)
                color: 'white',
                enabled: true,
                // OPTIONAL PARAMETERS
                url: 'https://www.sharethis.com', // (defaults to current url)
                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                description: 'custom text',       // (defaults to og:description or twitter:description)
                title: 'custom title',            // (defaults to og:title or twitter:title)
                message: 'custom email text',     // (only for email sharing)
                subject: 'custom email subject',  // (only for email sharing)
                username: 'custom twitter handle' // (only for twitter sharing)
              }}
            />

            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'blogger',
                  'messenger',

                ],
                padding: 48,          // padding within buttons (INTEGER)
                radius: 4,            // the corner radius on each button (INTEGER)
                show_total: false,
                size: 40,             // the size of each button (INTEGER)
                color: 'white',
                enabled: true,
                // OPTIONAL PARAMETERS
                url: 'https://www.sharethis.com', // (defaults to current url)
                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                description: 'custom text',       // (defaults to og:description or twitter:description)
                title: 'custom title',            // (defaults to og:title or twitter:title)
                message: 'custom email text',     // (only for email sharing)
                subject: 'custom email subject',  // (only for email sharing)
                username: 'custom twitter handle' // (only for twitter sharing)
              }}
            />


            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'linkedin',
                  'email',

                ],
                padding: 48,          // padding within buttons (INTEGER)
                radius: 4,            // the corner radius on each button (INTEGER)
                show_total: false,
                size: 40,             // the size of each button (INTEGER)
                color: 'white',
                enabled: true,
                // OPTIONAL PARAMETERS
                url: 'https://www.sharethis.com', // (defaults to current url)
                image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                description: 'custom text',       // (defaults to og:description or twitter:description)
                title: 'custom title',            // (defaults to og:title or twitter:title)
                message: 'custom email text',     // (only for email sharing)
                subject: 'custom email subject',  // (only for email sharing)
                username: 'custom twitter handle' // (only for twitter sharing)
              }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  )
}) 

export default SocialShare
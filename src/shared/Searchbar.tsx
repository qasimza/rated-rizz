import { Autocomplete, Box, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { searchUniversities, searchProfessors } from '../services/serach';
import { useState, useRef, useEffect } from 'react';
import logo from '../shared/images/logo.png'

const DashboardMenu = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event: Event | React.SyntheticEvent) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current!.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
    return (
        <>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant='contained'
          size='large'
          className='bg-primary-600 w-48 h-12'
        >
          Dashboard
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Support</MenuItem>
                    <MenuItem onClick={handleClose}>Pricing</MenuItem>
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>SignUp</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                    
        </>
    )
}

const SearchBar = () => {
    return (
        <Stack
        direction="row"
        rowGap={4}
        useFlexGap
        flexWrap="wrap"
        className="w-[80%] items-center justify-between"
        >
        <div className='flex flex-row items-center'>
            <img src={logo} alt="Rated Rizz Logo" className='w-16 h-16'/>
            <Typography className="text-primary-600 font-bold text-4xl ml-2">RatedRizz</Typography>
        </div>
        <div className='flex flex-row space-x-5'>
            <Autocomplete options={searchUniversities()}
                renderInput={(params) => <TextField {...params} label="University" />}
                className="w-96"
            />
            <Autocomplete options={searchProfessors()}
                renderInput={(params) => <TextField {...params} label="Professor" />} 
                className="w-96"
            />
        </div>
        <DashboardMenu/>
        </Stack>
    )
}

export default SearchBar
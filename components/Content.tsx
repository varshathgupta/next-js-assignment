import {Select,InputLabel,FormControl,RadioGroup,FormControlLabel,Radio,Button,Checkbox,FormGroup, MenuItem }from '@mui/material';
import styles from '../styles/body.module.css';


const Body=() => {
    return (
        
        <div className={styles.body}>
                  <p className={styles.head}> Requriter Dashboard</p>
            
                  <FormControl className={styles.formcontrol}>
                      <InputLabel>Select Career</InputLabel>
                      <Select
                          label="Select Career"
                         className={styles.formselect}
                          >  
                              <RadioGroup
                                  className={styles.radiogroup1}
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="FullStack"
                                      name="radio-buttons-group"      
                              >
                                  <FormControlLabel value="FullStack" control={<Radio sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="FullStack Development"  />
                                  <FormGroup className={styles.formgroup}>
                                      <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Software Development Lifecycle" />
                                      <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Programing" />
                                      <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}} />} label="Mobile App Development" />
                                      
                                      <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Backend" />
                                  </FormGroup>                                                            
                              </RadioGroup>
                              
  
  
                              <RadioGroup
                                  className={styles.radiogroup2}
                              >                                
                                  <FormControlLabel value="ui/ux" control={<Radio />} label="Ui/Ux Development" />
                                  <FormGroup className={styles.formgroup}>
                                  <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="WireFraming" />
                                  <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Figma" />
                                  <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="User Research" />
                                  <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Problem Sloving" />
                                  </FormGroup> 
                                  
                              </RadioGroup>
  
                              <p style={{color: "#646464", position:"absolute", padding:"0px 10px", marginTop:"15px"}}>Clear</p>
                              
                              
                              <Button  type="submit" variant="contained" style={{left:"270px" ,background:"#5723dc"}}>
                                      Submit
                              </Button>
                              
                      </Select>
                  </FormControl>
  
                  <FormControl className={styles.formcontrol}>
                      <InputLabel>College year</InputLabel>
                      <Select
                          label="Select Career"
                          className={styles.formselect}
                          >
                          <MenuItem value={1}> I Year </MenuItem>
                          <MenuItem value={2}> II Year </MenuItem>
                          <MenuItem value={3}> III Year </MenuItem>
                          <MenuItem value={4}> IV Year </MenuItem>
                          </Select>
                         
                  </FormControl>
  
                  <FormControl className={styles.formcontrol}>
                      <InputLabel>Location</InputLabel>
                      <Select
                          label="Select Career"
                          className={styles.formselect}
                          >
                          <MenuItem value={1}> Chennai </MenuItem>
                          <MenuItem value={2}> Bangalore </MenuItem>
                          <MenuItem value={3}>Madurai </MenuItem>
                          <MenuItem value={4}> Dindigul </MenuItem>
                          </Select>
                  </FormControl> 
                  
          </div>
         
      
      
    )
  }
  
  export default Body
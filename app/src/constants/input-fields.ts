export const signUpFields = (watch) => [
  // EMAIL
  { 
    id: 'email',
    type: 'email',
    label: 'Email',
    validation: { 
      required: 'Email is required', 
    }
  },

  // NAME
  { 
    id: 'name',
    label: 'Name',
    type: 'text',
    validation: {
      required: 'Name is required',
      maxLength: 20
    }
  },

  // PASSWORD
  {     
    id: 'password',
    type: 'password',
    label: 'Password',
    validation: {
      required: 'Password is required',
      minLength: 8
    }
  },

  // CONFIRM PASSWORD
  {     
    id: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    validation: {
      required: 'Please confirm your password',
      validate: (val: string) => val === watch('password') || 'Password do not match'
    }  
  },
  
  { type: 'separator' },

  // DATE OF BIRTH
  { 
    id: 'birthdate',
    type: 'date',
    label: 'Date of birth (optional)',
    validation: {
      required: false,
      // Date Format: MM/DD/YYYY, MM-DD-YYYY, MM.DD.YYYY
      pattern: {
        value: /^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\3(?:29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:0?[1-9]|1\d|2[0-8])$/gm,
        message: 'Error: Incorrect Date Format'
      }
    }
  },

  // GENDER
  {     
    id: 'gender',
    type: 'radio',
    label: 'Gender (optional)',
    validation: { required: false },
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
  },
]


const logoMedium = `
              @                      @
           ******/****************@*****@
           @****************************%
           *****************************@
         @********************************@
        ********@@*****@@@@@@****@@********@
      @@****@*******************************@@
       ***************@@****@*********@*****@
       @**************************%*********@                  ..|''||     .     .
        @**********************************@                  .|'    ||  .||.  .||.    ....  ... ..
           @***************************(@                     ||      ||  ||    ||   .|...||  ||' ''
 ****@    @******************************@                    '|.     ||  ||    ||   ||       ||
@******&  ***** ********************@*****@                    ''|...|'   '|.'  '|.'  '|...' .||.
 @******@*********@**************@*********@
  *****%************** ******@*************
   @***@*****@(*******@******@*******@(*****
    @**@************************************
      @*****************@*@****************@
  @@*******************************************(@
 @************************************************
  @**********************(((/********************@
  `;

const logoSmall = `
        ..|''||     .     .
       .|'    ||  .||.  .||.    ....  ... ..
       ||      ||  ||    ||   .|...||  ||' ''
       '|.     ||  ||    ||   ||       ||
        ''|...|'   '|.'  '|.'  '|...' .||.
  `;

/**
 * Generate Logo for Otter Project
 * @param size Size of the logo to generate
 */
export const getLogo = (size: 'medium' | 'small' = 'medium') => {
  const logos: Record<typeof size, string> = {
    medium: logoMedium,
    small: logoSmall
  };
  return logos[size];
};

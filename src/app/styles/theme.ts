//Configurations sizes for responsive theme

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(min-width: ${sizes.mobileS}) and (max-width: 374px)`,
    mobileM: `(min-width: ${sizes.mobileM}) and (max-width: 424px)`,
    mobileL: `(min-width: ${sizes.mobileL}) and (max-width: 767px)`,
    tablet: `(min-width: ${sizes.tablet}) and (max-width: 1023px)`,
    laptop: `(min-width: ${sizes.laptop}) and (max-width: 1439px)`,
    laptopL: `(min-width: ${sizes.laptopL}) and (max-width: 2559px)`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

export const theme = {
    
    //**Colors theme */
    colors : {
        silver : "#F5F7FA",
        bgPrimary: "rgb(240, 240, 240)",
        white: "#ffffff",
        zinc: "rgb(214, 214, 214)",
        brandPrimary: "#4CAF4F",
        neutral_d_gray: "#4D4D4D",
        tint_4: "#c8e6c9",
        tint_5: "#e8f5e9",
        black: "#263238"
    },

    spacing: {
        container: "5rem 8rem 5rem 8rem"
    }

}
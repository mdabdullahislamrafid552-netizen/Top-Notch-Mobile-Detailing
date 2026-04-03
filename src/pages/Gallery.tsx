import { motion } from 'motion/react';

const galleryImages = [
  {
    url: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/502974731_17950161455986580_7054949728577417337_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=MzY0NDgwNDMwNDUxMTk0NjIzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=OAsy7BSl52oQ7kNvwH8iGlT&_nc_oc=AdqpnpIohgBULkMaIFsEDsZVeWnqz1D4D0kvkHsRrFw-_YAPoHXXbtUFT25sQ_BNXWU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2YjcSqqDK5pszOUQMtgn6RWkVPksSCcdx3lbfWn3Dw6Q&oe=69D52AF4',
    title: 'Flawless Exterior Finish',
    size: 'large'
  },
  {
    url: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/504495841_17951250347986580_1959076821600287881_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY1MTQ2NTA4MjEyMzk5Njk5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=NBMO3CWdSZIQ7kNvwGomrh2&_nc_oc=AdqLZ-D1AssyIqtmPoy0kzFtlP_-CMvHoLnHv0E5dg67njEK0vr8H598neorS6j-0mQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af10TuiViB2xlWzdiTbGkG_tDCVXC9Gw1BafM5QJObDwjQ&oe=69D53C21',
    title: 'Precision Detailing',
    size: 'small'
  },
  {
    url: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/496217117_17947467287986580_8261325828121695120_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzYyODI4OTA5ODIxODY5NjAyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=25bTB2dCtw8Q7kNvwEX3EQY&_nc_oc=AdqDVvh0QPR92CdaWmWdocveczyj75dbtkUrEhuPx69-4g0FnTyBf7OAwJF1IH0t8BY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af3ajX1mNuzORfJm8ABzr_OUnI6qDNHUJLB6A8BNiOGR8Q&oe=69D52CC1',
    title: 'Ceramic Coating Reflection',
    size: 'small'
  },
  {
    url: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/499269432_17948580101986580_377376821688569955_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzYzNTQyNzQ5Njg3MjAwMzAzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=dV_jM1G8lToQ7kNvwE77IHU&_nc_oc=AdrQD6DT3lo1emWcK_J0alIfG2OB4shlSuX0D8uvQqLG6BksF7kejyxkGUehG9LYmYU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af0fXuqUOqhUUolO3vvbnBMqvkd_tqMokJufk1Jtzu6ODA&oe=69D532A6',
    title: 'Paint Correction',
    size: 'medium'
  },
  {
    url: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/656079476_18164671048411813_8405562148593919976_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzM5MTIxODE2MTgzOTIyODgyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=U6zkH9ketOoQ7kNvwH1cl2L&_nc_oc=AdqIpp2LQpx534Ge5LjPM5Hbd1MBBBWyxxxqHHqwecqBmJEX0Y1sy_cA-_aEWrF1hZ0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=V_VfO7dtS_QOkLqajq5b3A&_nc_ss=7a32e&oh=00_Af1cigIxM2o7GBUHCqaI-Rs5_wt7wR-iu8RzaYRaTG3WJw&oe=69D52269',
    title: 'Deep Interior Clean',
    size: 'medium'
  },
  {
    url: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/651231412_18002262920892576_6995311606997983038_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzMxNDQ5NzY2MTA3MzkwNDE5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=aYsOwhfsXMYQ7kNvwE8_Lnc&_nc_oc=AdrUbDd5R5AOk7z_CW7piM0xkCN9140ceInh7PiEliVHEa-go_EpwEpvsvx42-iXcnw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=DphyCPYzWYF3aF-p1QARJg&_nc_ss=7a32e&oh=00_Af30-d5x1CFHu65fFEKE7dBxQT0wTyJlertP1ARD8_Oxrg&oe=69D54F64',
    title: 'Wheel & Tire Detailing',
    size: 'large'
  }
];

export default function Gallery() {
  return (
    <div className="w-full pt-32 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter text-dark">Our Work</h1>
          <p className="text-xl text-gray-500 font-light">
            A showcase of our dedication to perfection. We let the results speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => {
            // Determine span based on size property for a masonry-like feel
            let spanClasses = "col-span-1 row-span-1";
            if (image.size === 'large') spanClasses = "md:col-span-2 md:row-span-2";
            if (image.size === 'medium') spanClasses = "md:col-span-1 md:row-span-2";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl overflow-hidden bg-dark cursor-pointer ${spanClasses}`}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-2xl tracking-tight"
                  >
                    {image.title}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

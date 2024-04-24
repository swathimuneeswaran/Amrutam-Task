import React from "react";
import "../App.css";
import "typeface-montserrat";
import "typeface-roboto";
import "typeface-nunito";
import "typeface-poppins";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import EastIcon from '@mui/icons-material/East';
import Approach from "./Approach.jsx";
import Stories from "./Stories.jsx";

const Home = () => {
  return (
    <>
      <nav></nav>

      <section>
        <div className="side">
          <p className="nam">Namaste,Welcome to Amrutam</p>
          <h1 className="first">
            Step into Holistic Healing with{" "}
            <span style={{ textDecoration: "1.75px underline" }}>Ayurveda</span>
            <br></br> Book Consultation with certified Experts.{" "}
          </h1>
          <p className="para">
            Dive into the world of ayurveda and Experience Personalized Health
            Solutions and<br></br> Holistic Guidance from Trusted Ayurvedic
            Doctors Anytime, anywhere.
          </p>
          <button type="button">BOOK AN APPOINTMENT</button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHZz7ngJyjHmSF3Xm~Mbmvsh6XIGK9xbBYq-L7n5ZTjCHFEQbQr1XyMV0WG-YCDnhsIkxbvKacEjSMcM7IEPcK3Q4Jd4BbMPu19w7-T5~mzrToEY558ThHLz3JHbOgpzwhLkbcD37ZT9hFAnO3yx98Fm4By3YMFtyS-53wCc7Ew8wt4EBlyLzKbMuXck9MiKZLQuUo9Ix-dAeooFTnes0gZmB6JwfOhpz8JPT1jASjmtgXJ1UKtMpOGHh-jGZtoSSRJYYD8cGJDRcnOYTjke7b~xJ4DhrZaWzU-tX~Z35mdUZSoItA9bH8nbD0rWXmKnMiL84ppuGNQxQYEo9uhJjA__"
          className="image"
        ></img>
      </section>

      
      <div className="details">
        <div className="des">
          <div className="div1">
            <img
              src="https://s3-alpha-sig.figma.com/img/f4ba/b0ae/b3be65721ad15db48b42ced1fe1add76?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faHBPWq9kP9y91C89iR~Yy6vOnCHXarmrshY5RQDMzA52R8fmPdKF5m2wtC68NEQtodwY1ObnJHRduYCajFIdWzeNneIhAkIzFlrAoQ2w~fX1IMmJcBQhsfdvsQVphqvlkVBywbW9qe-PvBfeFZ0MfKPwtNFS2ckclZPYLF7TKF1aSWfhZ6SpUPV0EgTjrt8EmYbXbI93Lv5Tv33Kqqz7W4cSOSNrOiSDu-gUnZ~IBTzn9tDyDgSZrjiVZHh-GUrlQVDr5~QULGsgd67ELmqZkdEltTNrz5xtibtFLxwYn-YHzJZvB1~2bNLREahyJbFRirMemovZS3wgsJGq8jCLQ__"
              className="image2"
            ></img>
          </div>
          <h5>
            Convenient Online & <br></br>In-clinic Consultations
          </h5>
        </div>
        <div className="des">
          <div className="div1">
            <img
              src="https://s3-alpha-sig.figma.com/img/2c5e/d627/8cf1f869d2e948b71cdcdb14c7c4413f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foRFBF~H2jxfZEa~ctSIYZtoZ2s9SsF3JNC668wiMnC1hzp6Lu6mCSy~Im~CbgVNzg2XMLLjEowDSHl5lHO6Op4foGfQCleMjTPWKaJr4peA9JtgxI-JayRDueEcDgPyh5DYySTVtwcQKGGujbpscOLwX-skxLuJHJre3qb3PgLn637-e-s8y2Uo0rTqfftOLHA1hKm5Sw048FAqRSzK0pYkfgdDyJ~KcKKQJVGSYwiEiuzP2hA-FKV6pk-L4Slk3e8ajZ3FIDAHuffLrr8W58CRpDNjUMh3KwZfzCnlFpwQxL2hC5RzcYD3MVKwgObrb~opE2d6aEU5bHR0i-nfnw__"
              className="image2"
            ></img>
          </div>
          <h5>
            Convenient Online & <br></br> In-clinic Consultations
          </h5>
        </div>
        <div className="des">
          <div className="div1">
            <img
              src="https://s3-alpha-sig.figma.com/img/0854/69db/3d23d6085aab3b3dbe1b662f60051d85?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeiH9pljHOvIS9K7Ra1HfDU-0de7rMvEtNV~I3iCz6FcPpReWWEOC0UStZVmuhqk38RkKP8Y~Alus1JiDZnCNyCAeDyaRSHNwE~vS45ENw0Pg1WZcdSlzfwfdI4JbWcpQ3RJ7KLkcKZExE00rGBJoHFAunkEYSOj8aqwxtQPYKtEOBqMoaG7fbAg6ebi57bhINXjDw0Yd58HeBdAEs7N9bZoCkIG6rABsSNWJJlVpjcWj3ydVatttg1dZBbilTErNmDCga20Z02t3wo7Gvqwv6xkPYjXKXxTMzgY1lW3Rp9~hVELOqKLCOUsWbJLLVN1Jr9qQTPoYQeFMapxRtzJIQ__"
              className="image2"
            ></img>
          </div>
          <h5>
            Convenient Online & <br></br>In-clinic Consultations
          </h5>
        </div>
        <div className="des">
          <div className="div1">
            <img
              src="https://s3-alpha-sig.figma.com/img/cd8d/62a9/52ed6e4cba8b811d1e2a2336dfc266d0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJ47BXHwOiUgdyGfVNczoszh3lAGEGHHuPRCdTDTUTBYHtkG~NkDOgfNAPtxoMKwv8NDCeXz5w8bMab6UnHI377Nwk~9Bv-BhprhyKocHASAFnU0CicIgr2adomONyebS2sbzH4yCuxKFmooVyzZcuq1VtagjwjX0F34eYWlZ4p~4KUhjRZMhs3POPuuCx0ZpxnTukjKe37b5Gm549zs7P1o5JbsmNmhRKhoartEiCVFj3vYSS848kMoeBNoWdEPq6KXcs40g3ZigNnwPYQlnpFVKa0QoI3M6y-FA5A7lHDtqYs1w6QNI6FOwrE2bb64RrmgtjKw17bXAVzgwszH5A__"
              className="image2"
            ></img>
          </div>
          <h5>
            Convenient Online & <br></br>In-clinic Consultations
          </h5>
        </div>
      </div>
      <div className="sec">
        <h1>Discover Ayurveda’s magic with us</h1>
        <p>
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony<br></br> and vitality. It's like a journey to better health
          using ancient wisdom, <br></br>a totally effective approach for a
          better life.{" "}
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=At43ZTnzGBKlNZcO3HM-gs9bM-xqYrMdWUbt1zAiqyVSXE3AWUuj99tcNRN1Wb0VwBDb1o~nxNdknjmxhm-jMvANC7aI2Lb2SgnSa44pHYM1BAMj5~loCKlvNeex96TZ7OIwxv4yQV8JciYI8PB~g5YEBciduiLC-tMPcrkXboGKV~obUMn5Q9qTzXBkuNmgWL5WC6O7YyD4wlXK2aHbrq8yL7sgC2Wwmh0GuOukHvmwl2oQgTAI94MRyLPbxAcXS~tLXG6Bvcn9L~A46YfNxRpmAOHgHCJ8y~oLxhKJl5bKSw4uOoKoh3gogPEtanhV0f11E490SKr25ktVz6d-Uw__"
          className="design"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPeCzSF~nlDZ-GboDvCUPnd1bBQVIEq8l9URmKhqCnz-skcSLCsaWhLIXxLIaUejl0gGKjJ8zyc-2P7UmeY3VgRn~MaJyd8W0~2NDAMuZtN8eF3t7d5fspcP6yp-4rV0WC8Mq1SIhpba7Wkkd~sAowi70A5AEmIiHvJdbgpRpWdWe9rRJyWQo22I0RsFq6ZaUGw2UxXg4QHhCa~Z07blH6JGtyd32rLQ5H1vvMdxa1ji1tYfffBxk5GhqrRzDQ64GzXaXq6x6OhDBDfVOaOSnawIljFLZJ9NaP-ZLVEw7k8HaAN2Bo~VSC0V2DEeXJGa5rcwIllS5hZZlgU7bLlFeg__"
          className="design_image"
        ></img>
      </div>
      <div>
        <div className="heart">
          <h3>Personalized Wellness</h3>
          <p>
            Get treatments made just for you<br></br> based on your individual
            doshas <br></br>( body type)
          </p>
          <div className="dia">
            <img
              src="https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~xG-Myl3UK3vLBJfqh9iBncveW6PCFprCdd0JYAhZLHp0Zp9H7dMy8YVBeeiIqmKvevHm90sodcQo4rSLFO2WKXsemZY2MvT9S7mVLq5-Xc9qZMODsfmmz2Mzu-yq5GclGlYSF8Uavl5-sPS5nZM64zIHG3nMEJhkRphKU09ERTB32G1Ii2tTsbSNwASdV3oBsYo99K1GNSpMZZVY8jTyQ85DdtcrwP8GuOX5LQ1FGd73zE9qBo-833-E66F035McUK-EptN70KmRwNgQUwLKl9lC3TGURlIWerufhYHg4~cIh9gVv3MMFvnRtEa4oO5xgVGothCZLr~YogbqPLsg__"
              className="heart1"
            ></img>
          </div>
        </div>

        <div className="heart2">
          <h3>Focus on prevention</h3>
          <p>
            Stop problems even<br></br> before they start.
          </p>
          <div className="dia2">
            <img
              src="https://s3-alpha-sig.figma.com/img/2879/63ec/4b701523b3665b8db7fd2b6067eebff8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxmuWo2MVZMAA6mTl-D~JZVNFe0GpbNbT9YNDdIA64nSzpVD0uCMV3GI83sd3grfoYNLr9PokiFrq1IguF7qKyuLIf78XQmSbQ48FkvMvEDNVnymVc~yt7xye9m7s9WQFeSGHv6ar9~6vXq9tdKM6qFRhb3rxh4wFAfNjFKxBOrry8MwN-UV33ynyhmPbZz2prBfSgOLWA~gAGOl~cbxqv0Zvjvk584MJKHkDg5MMssi70XcDpS~NI9scWq-i-q5m49~KKBdnPZH4z5d8NJdn2eocE9KgbpU7OOSfPkdJXTPtMnYYH1WK8lpzQQq8UlEcYm3SAjOgFeGLLSqeYD0GA__"
              className="heart2__image"
            ></img>
          </div>
        </div>

        <div className="heart3">
          <h3>Mind-Body Connection</h3>
          <p>
            Keep your mind and body in sync<br></br> for a happy life.
          </p>
          <div className="dia3">
            <img
              src="https://s3-alpha-sig.figma.com/img/2505/8cf0/56734e9ae68adcdb9d2f0667d457f069?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p40WPauDHwogNZBRuHQSNCsWnV0E7yqN22cjBXmEmMBmtlRJ1PSMrrqC4bNLljxYanP6eDCwOUQ5uPavq~kkE2Ibn~UxGuhiiH7sYwWofrntp7ZpxR8thBaG9wQe2ckE6cMs2gWfQ-0XSQzbqUl4-eZrSX~gKStEOKAhjW8FfNJe2pXWb3jcRTyyLionGsfuE-87A8EfYRT4m6qqQCwkggmUPBUfK28tNSUe62qlxwp1aNyNigtc18Pt~GWbmQORKEAOcL9gydYsTRHgdmOwRgdNY3zAp9kNDVnv15lu9QII6taUl0knWYntA0TnLmtVlKL-5jMr8pogyr6noaX3Rg__"
              className="heart3__image"
            ></img>
          </div>
        </div>

        <div className="heart4">
          <h3>Holistic Healing</h3>
          <p>
            Fix the root problem for <br></br>long-lasting health.
          </p>
          <div className="dia4">
            <img
              src="https://s3-alpha-sig.figma.com/img/4e2b/af21/22cc0c69eccc3be8038fe8ac40f9371f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpgEuo6p~TeabyHrCzF-v9ppCJ-U3lRIg1nnPhnZZaUjVU4bfWmNNPvDaKENTqznt5IFMfESNMN3S7NBJhyBeUYqoIiYR0AZCCqV1vwMpJ8~AGI0xg7x5cBuGZRXs6PsvNBa7SQSIG-DhRPGsPHWTWsivmnT0Yj-mrVktG-KBXscsvj6hY~Z9XZjVXxHPHKuAeq4TeV3R4cIqwPZcbPV4udW26DZNN8Sivu3gMJ~oXjlwxF0EwnkjMn2YVrbkrTQhx6jJJwyRVjkOmALqyQ7dj3cNlkF4UHusZBldbJajlP1fpATSEVJmDggBdQip6Srmp8EyGNKd9qrFZB-8h9irA__"
              className="heart4__image"
            ></img>
          </div>
        </div>

        <div className="heart5">
          <h3>Natural Remedies</h3>
          <p>
            Using herbs and natural <br></br>therapies for healing.
          </p>
          <div className="dia5">
            <img
              src="https://s3-alpha-sig.figma.com/img/8d96/7947/07f25886ba1078a16b73185d5f869ad8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxZCmUyTNm5SR5AV-C4oUrClhUwQCkrO4IM3jcjVo9I8sGgq7vDS2SYfJoWgyGEkPECD2giLTYWF6dB-GQ8UbxpZhalT9u8qNAaOoRbL8mEY-oAV6gaa-uA2F8dG8jmUbyKCr3f385KeYF9GkvDawEcrUbqMaXHxta-yT-jMKgIH7d1U0aZyA5Karqnr31JpM6fU0fN-PftgWYRabDPlQ31PjCGDkgUv8LXGqIxEQuwQOdCqHMCyb7fx-4jA0lFL-EkxbYCzBi~AkFHXfL~RxPCMCPujdpTy97T~Vw~uf3~7DczoCS3-KEz5AVWHMbQeP2FIuYo8tAGIa70ZjPbzBw__"
              className="heart5__image"
            ></img>
          </div>
        </div>

        <div className="heart6">
          <h3>Boosting immunity</h3>
          <p>
            Stay strong and healthy for life,<br></br> not just for today.
          </p>
          <div className="dia6">
            <img
              src="https://s3-alpha-sig.figma.com/img/8cfd/d829/c4e732142f1ed180d4de142f4047a6ea?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOEQe3v9JFb~-sD5VfoKDYsKc7QmVUf7ydrmScx8T7YzaPAk3q4oECO2rFyIMzu8RaO40BCVOL63E-oUYtwr2nq0Ge-IgOii04bpQLgBSxIzL5P06epvzPDf-AsOYby1JWn2xhuoOT-k0qNnrxCK26fAqxnlbXLDuuF104vEDy9ZmAUIidorm0rWMlVhpmVhT1vKEGTBSy8cc67WHFnD83lh8zy8vpvLrczkhhPd3OhPIuw84Pa6Xi2HQcrssETSX9ZLD02ObYGR17pisd0LLkwSShb~sGcgPD0~jMackXjNDf8scPgTA2y1hz1AmKpjQ8cwC1zs-jbGo5zTrDtyQg__"
              className="heart6__image"
            ></img>
          </div>
        </div>

        <section className="box__section">
          <h1>What sets Ayurvedic consultations apart?</h1>
          <div className="entire">
            <div className="row1">
              <div className="box1">
                <h3 className="hindi">
                  स्वस्थस्य स्वास्थ्य रक्षणं,<br></br> आतुरस्य विकार प्रशमनं ।"
                </h3>
                <p className="para_hind">
                  [ Meaning: The Goal of Ayurveda is to maintain the<br></br>{" "}
                  health of a healthy person and to cure the disease of a{" "}
                  <br></br>diseased person. ]
                </p>
              </div>
              <div className="box2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-BS59qFdwG4k4SvtMK44hzcBrLByEYnmkLeagoMhYiknUKV2cTC2EudBwtVEJPCEbibIRnFTOHNukcm-faw7tCn6uP03T59Fvt8S2DclDtsbIuFm~jZ~3MXukjCCD3v4YpU7HW37hfU-jRaVnKESDHj46tvEKuzNdErG~LKoHsBCjjc~oGm1CpK2Z6TWLWpejl8IfLs6dLu5UH1-EGg2ev9dWCswk6VipOs-zPbHCyZXIVnDOxcvdyf1hHC8X44agxtAxehcp7CtgL-1atV~vgDTjK62eF6m-pII6ZR~mVE9cN7~Y63RVvpAW-P-XFBwBNaBPVAWJO5NKlZtg2n0Q__"
                  className="box2__image"
                ></img>
              </div>
              <div className="box3">
                <h3>Precise Diagnosis</h3>
                <p>
                  Ayurveda's core principles <br></br>revolve around Vata,
                  Pitta,<br></br> and Kapha doshas, guiding<br></br> you with
                  precise diagnosis<br></br> and treatment.
                </p>
              </div>
            </div>
            <div className="row2">
              <div className="box3">
                <h3>Zero side-effects</h3>
                <p>
                  Ayurvedic treatments are <br></br>devoid of chemicals, and
                  <br></br> are based completely on<br></br> natural herbs 
                </p>
              </div>

              <div className="box2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVZXsvlPdkNnQcmWaBDKR1wBEj5MhTbDxixff0YyT~yVkxcDNymZfaKT7WpEz5C6VEYHUm6q0pOomYCTZIOiwj00dtTHdmaBZrtsuTNOg-xiy9l9m94O6drv9z6~ZiGLNNycQ36kGnuafas~RQ0PsF0hibtUOh~1XM3sqmeymgRxljEvYcNrKCbAt7G35pEyr-AXg76alPRarKrkoHP1X1u6uuywEhzwxS26JfbHQ5GgHTBlaQjUYk4F2dTA8FJYM~SvcmIfcyU1SOtWstpkLg1dputk5WkH0ksj8JXaj0LioIo8TEXSnlz9qwPQdtZ9ROYn4s6CxHHLrb9Q1zgASQ__"
                  className="box2__image"
                ></img>
              </div>

              <div className="box3">
                <h3>Individual Treatment</h3>
                <p>
                  All Treatments are<br></br> personalized based on a <br></br>
                  person's unique constitution <br></br>and health concerns.
                </p>
              </div>

              <div className="box2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/63a4/2853/caf304c4ff88f018f79dedae521d759e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-1ZZbmuk1M7HZBspJf95gc6mYMHoDHR6VaA62O7ilpZg0d38y2A95F8Ml-yh0psazQGZQGYnCjBHpiwNJzh6jw8CUeyk8sM5j3M9FUYolkxOJy~5qFMatrkHObjQV6coXouH8HuxGwYqk-EhKvPQBzhFTNQsSvvVzTJlv6bjILM0pAme07kvKNVsR3rl1fj33Ve1-N-TpVd1tWE9s0U9A-n5~6gG7Va22w38fFyz1wDEJKwiYFxmsbZKCPxvOF5e5t7INhf9u5hdB-duupqCDGyrkwV9jmzgh5StRasVuAer7hKi73D2-mMas5paODJos3~YCp36qWxtj-XPUnuYA__"
                  className="box2__image"
                ></img>
              </div>
            </div>
          </div>
        </section>

        <div className="mask">
          <img
            src="https://s3-alpha-sig.figma.com/img/d45f/d3de/6f20e70fa75049c9e8140baa6d7e6531?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJ4Zw4xtniavMY~CBUWygZYq6Ax70~TZ7VRjjJkbGvA~8uGXylRRZK9mnOktv86mJBOVN0GZAopUjpHWRAaV6kT62oY~HX~OQiOQdYnXFU9cUBhn-Xr7HiTIMvzKsUZU4NIomEWuECRsM164ZYe1~QDfSsMpD9XIIZKXhDLDzJlnQLmhzRt-higCBNlH~ngbaw-1LSuwYSAM6FLax53p2iHXg26ykwLZxKjZel5Uu-lFL-ROe~RYRBsNfWUgtganiCFrcvV3gBJVJyU-9uWF3CxKaxEWv52ofmVm4bsTBrEgUYUvUOBnLNTmAeP5JwncXeMEXSI-FLeBtnAyaFaySA__"
            className="full_image"
          />
          <h1 className="head">
            Ready to restore harmony in<br></br> your mind, body and spirit?
          </h1>
          <button type="button" className="but">
            Book Consultation
          </button>
        </div>

        {/* <section className="approach_box">
          <div className="ayu">
            <h1>Our Ayurvedic Approach</h1>
            <p>
              At Amrutam we follow a unique and personalized approach to
              healing. Our expert <br></br>practitioners begin each treatment
              process by conducting a thorough analysis of the <br></br>
              patient’s body type, medical history, and current health
              conditions.
            </p>
          </div>
          <div className="row_aiyu">
            <div className="box_aiyu">
              <div className="circle">
                <h2>1</h2>
              </div>
              <h2>Make Appointment</h2>
              <p>
                You must make an<br></br> appointment in advance, to <br></br>
                choose the service and date.
              </p>
            </div>

            <div className="box_aiyu">
              <div className="circle">
                <h2>2</h2>
              </div>
              <h2>Consultations</h2>
              <p>
                The next stage involves a<br></br> thorough consultation with
                <br></br> an Ayurveda practitioner.
              </p>
            </div>

            <div className="box_aiyu">
              <div className="circle">
                <h2>3</h2>
              </div>
              <h2>Treatment Planning</h2>
              <p>
                The Ayurvedic practitioner<br></br> creates a personalized{" "}
                <br></br>treatment plan for you
              </p>
            </div>

            <div className="box_aiyu">
              <div className="circle">
                <h2 className="circle_head">4</h2>
              </div>
              <h2>Maintenance</h2>
              <p>
                These visits allow for<br></br> assessment of progress,<br></br>{" "}
                adjustments to the treatment.
              </p>
            </div>
          </div>
        </section> */}
          <Approach/>

        <section className="stories">
          <div className="custom">
            <h1>STORIES FROM OUR VALUED CUSTOMERS!</h1>
            <div className="row__story">
              <div className="box__story">
                <div className="div5">
                  <h4 className="con">Consulted for Skin</h4>
                </div>
                <div className="dot_div">
                  <div className="dot"></div>
                  <div className="name">
                    <p className="name_tag">Sophie Moore</p>
                    <p className="place_tag">Chennai</p>
                  </div>
                </div>
                <p className="date_tag">14/02/24</p>
                <p className="star">
                  {" "}
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                </p>
                <h3 className="kind">One of a kind service</h3>
                <p className="par">
                  Lorem ipsum dolor sit, <br></br> amet consectetur adipisicing{" "}
                  <br></br>elit. Praesentium, ipsam?
                </p>
              </div>
            </div>

            <ul type="disc">
              <li className="list"></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>


        <Stories />
      

        <section className="expert_sec">
          <div className="expert">
            <h1>Meet our Ayurveda experts </h1>
            <div className="row_exp">
              <div className="icon">
                <KeyboardBackspaceIcon className="arrow"></KeyboardBackspaceIcon>
              </div>
              <div className="box_exp">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__"
                  className="exp_img"
                ></img>
                <div className="but_rat">
                  <h4>4.5</h4>
                  <p className="star1">⭐</p>
                </div>

                <h3 className="dr">Dr.Vaishali Sharma</h3>
                <p className="ayur">Ayurveda Practitioner(BAMS,MD)</p>
                <p className="prac">
                  <SchoolIcon className="school"></SchoolIcon> 25 years of
                  experience
                </p>
                <button type="button" className="skin">
                  Skin Specialist
                </button>
                <div className="boo">
                  <h3 className="book">Book a session</h3>
                </div>
              </div>


              
              <div className="box_exp1">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__"
                  className="exp_img"
                ></img>
                <div className="but_rat1">
                  <h4>4.5</h4>
                  <p className="star0">⭐</p>
                </div>

                <h3 className="dr">Dr.Vaishali Sharma</h3>
                <p className="ayur">Ayurveda Practitioner(BAMS,MD)</p>
                <p className="prac">
                  <SchoolIcon className="school"></SchoolIcon> 25 years of
                  experience
                </p>
                <button type="button" className="skin">
                  Skin Specialist
                </button>
                <div className="boo">
                  <h3 className="book">Book a session</h3>
                </div>
              </div>


             
              <div className="box_exp2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__"
                  className="exp_img"
                ></img>
                <div className="but_rat2">
                  <h4>4.5</h4>
                  <p className="star2">⭐</p>
                </div>

                <h3 className="dr">Dr.Vaishali Sharma</h3>
                <p className="ayur">Ayurveda Practitioner(BAMS,MD)</p>
                <p className="prac">
                  <SchoolIcon className="school"></SchoolIcon> 25 years of
                  experience
                </p>
                <button type="button" className="skin">
                  Skin Specialist
                </button>
                <div className="boo">
                  <h3 className="book">Book a session</h3>
                </div>
              </div>

              <div className="icon1">
                <EastIcon className="arrow1"></EastIcon>
              </div>


              <ul type="disc">
              <li className="list1"></li>
              <li></li>
              <li></li>
            </ul>

           

            </div>
            <button type="button" className="exp_but">Find More Experts</button>
          </div>
        </section>



       <section className="Amrutam">
           <div>
            <div className="ellipse1"></div>
            <div className="ellipse2" ></div>
            <img src="https://s3-alpha-sig.figma.com/img/8c1b/9dae/35e943f21e799601f8a2e985c6f1894f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDLbBHGHjvDkP8I5rzZc8~JPkoRjbEpoD6B34Y4GcottkEZIkH4VVa1rvzDl87R9pd316LdfpdsEk1Sax2fUf86CK9hR2K2J5vg0dcRccx6jQDOyCG0tbo1ANAS13T3h1w0k1iTUPcJiKldVAxOXd1XFLz4UAR-yiZKXXzxFqFmHUZoOy4mPot6uiYlGyrMofR7ZunUZhivzOTlLQtwGxhjQhwPCeFWRaW7cKxec7yyXHsZE9jOpWFo-eOX4O71pQfxzv6r3eTx9Gwl~f1ctCMoL2qt4CvEHLv85jORmvgRRIZc7If-i3Id3S73Rk3T3sRxivsNmOj9M2HM-5upZnQ__"
            className="phone"
            ></img>
            <div className="amu">
            <h1>Amrutam home App</h1>
            <p>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart<br></br> from mimicking the significant characteristics of our website, this app offers a<br></br> wide range of additional features.</p>
            <h2>Get a diet & lifestyle consultation with <br></br>ayurvedic experts across the globe </h2>

            <h3>Get the App now</h3>
            <div className="play">
           <img src="https://s3-alpha-sig.figma.com/img/d1a0/850d/40fb0269e9c34805102bf5d5f745cd8d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJrHHaHBTQ7TmGu~Nh8nzMmXbARYw6m-dSNoxCs3JeP1ZpvTSlUIxGxzvB92JpmANQKYv70DrL3vK-ThpI5sAqD-idd6bmSrfgK8PTPyV2HO02dtM1nR~RNtmQGByOBYYlOF1ljSwWgGaAw2tXTOy8D7vD2QLCKJCnEqXYiEFQ2TJU8BD2DyrD-X-rzpMyiqj6P~0InK23hBv2ImazE2tZJkXtYNVHUUSLVYb3L-FWs4cBF~H6dMBpNSEUwB06E6A8YQs7t2mD~hdywyAYiMc-G0B8w88n7f6X6rn1-zS-LS27dKT6FtHNBxhu4VKflPLKNHFDh6VBvFJDAnHdxgjA__"
           className="google"
           ></img>
            <img src="https://s3-alpha-sig.figma.com/img/72d6/f410/224928bf1eadd5f797c6e93a6a6b92b5?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I20yBLJ-3ln5PBSKt9NK-qotUV2Bhq5RvkKTrKAABFG07Gtefwqa0z~jePb7VNRItywW6iqBs8fke5ojQq-qId6T8v0D7VrUu4RHzxOITN8qkBmfi-Z2b1W1mKC~buiJPa7qmBg7DhxH7XeYAMQgIPVME2DW8Y~928dLA5m2fKehtXQ-XPSQZjcvC2hvAOK~EpI3S4Hd1m5BTc4GFTkoTmr0zFUV-8J0P2FlzGbZySUEfKoAsUK9hHPLb~QoDXTsFK1~m5h4oxfREIAqH4yXlut3dCfuzv~t451-DgRJD0-McSmtP5JxhcKEfhlqExXAwryApWE0NqMB7kOEWB-fCw__"
className="down"
            ></img>
            </div>
            </div>
           </div>
       </section>



       <footer>
        <div className="foot">
          <h4>Information</h4>
          <ul type="none">
         <li> About Us</li>
          <li>Terms and Conditions</li>
<li>Privacy Policy</li>
<li>Privacy Policy for Mobile Apps</li>
<li>Shipping and Returns Policy</li>
<li>International Delivery</li>
<li>For Businesses, Hotels and Resorts</li>
</ul>
        </div>
       </footer>

      </div>
    </>
  );
};

export default Home;

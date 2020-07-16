<?php include 'header.php';?>
  <!--Breadcrumb Area-->
  <section class="breadcrumb-area banner-6">
    <div class="text-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 v-center">
            <div class="bread-inner">
              <div class="bread-menu">
                <ul>
                  <li><a href="index-2.html">Home</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="bread-title">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Breadcrumb Area-->
  <!--Start Enquire Form-->
  <section class="contact-page pad-tb">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 v-center">
          <div class="common-heading text-l">
            <span>Contact Now</span>
            <h2 class="mt0">Have Question? Write a Message</h2>
          </div>
          <div class="form-block">
          <form method="post" name="feedback" id='form-getquote'>
							<div class="fieldsets row">
								<div class="col-md-6"><input type="text" placeholder="Full Name" id="name" name="name" required></div>
								<div class="col-md-6"><input type="email" placeholder="Email Address" id="email" required name="email"></div>
							</div>
							<div class="fieldsets row">
								<div class="col-md-6"><input type="number" placeholder="Contact Number" id="phone" required name="phone"></div>
								<div class="col-md-6"><input type="text" placeholder="Subject" name="subject" id="subject" required></div>
							</div>
							<div class="fieldsets"><textarea placeholder="Message" name="message" id="message" required></textarea></div>
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customCheck" name="example1" checked="checked">
								<label class="custom-control-label" for="customCheck">I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Business Name.</label>
							</div>
							<div class="fieldsets mt20"> <button type="button" id="saveusers" value="Save" name="submit" class="lnk btn-main bg-btn">Submit <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></button> </div>
							<p class="trm"><i class="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
						</form>
          </div>
        </div>
        <div class="col-lg-5 v-center">
          <div class="contact-details">
            <div class="contact-card">
              <div class="info-card v-center">
                <span><i class="fab fa-whatsapp"></i>Whatsapp:</span>
                <div class="info-body mt-3">
                  <a href="https://wa.me/923006634785" class="d-block" target="_blank">(+92) 300 6634785</a>
                  <a href="https://wa.me/923035501602" class="d-block mt-3" target="_blank">(+92) 303 5501602</a>
                  
                </div>
              </div>
            </div>
            <div class="email-card mt30">
              <div class="info-card v-center">
                <span><i class="fas fa-envelope"></i> Email:</span>
                <div class="info-body mt-3">
                  <a href="mailto:info@techgater.com" target="_blank">info@techgater.com</a>
                </div>
              </div>
            </div>
            <div class="skype-card mt30">
              <div class="info-card v-center">
                <span><i class="fab fa-skype"></i> Skype:</span>
                <div class="info-body">
                  <p>We Are Online: Monday – Friday, 9 am to 5 pm</p>
                  <a href="skype:live:kamranansari5580_1?chat" target="_blank">Kamran Haider</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Enquire Form-->
  <!--Start Location-->
  <section class="our-office pad-tb">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="common-heading">
						<span>Our Locations</span>
						<h2>Our office</h2>
					</div>
				</div>
			</div>
			<div class="row upset shape-bg1 justify-content-center">
				<div class="col-lg-4 col-sm-6">
					<div class="office-card">
						<div class="skyline-img">
							<img src="images/banner/lahore.png" alt="sydney" class="img-fluid" />
						</div>
						<div class="office-text text-center">
							<h4>Lahore, Pakistan</h4>
							<p class="pr-0">Defence Chowk Walton Road</p>
							<a href="https://goo.gl/maps/CUQqsw3ua5zT7o7X6" target="blank" class="btn-outline">View on Map <i class="fas fa-chevron-right fa-icon"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  <!--End Location-->
  <?php include 'footer.php';?>
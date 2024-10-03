<div class="mobile-country-area asyncImage" data-src="assets/images/home-background.jpg" style="background-image:url('assets/images/home-background-small.jpg');" id="mobileCountryArea">
        <div class="mobile-country-area__navarea">
          <div class="country-icon">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <p class="p">CHOOSE LOCATION</p>
          </div>
          <div class="mobile-menu mobile-menu--close" id="countryListClose">
          <img class="close" src="assets/images/close-button.png" alt="">
          </div>
        </div>
        <div class="mobile-country-area__list">
          <ul id="countryMenuList">
            <li onclick="myFunction()" id="btn1" class="mobile-country-area__list__li">
              <a class="mobile-country-area__list__a" 
                 href="javascript:void(0)" id="europeList">
                 <i id="e-left" class="fa fa-angle-left" aria-hidden="true"></i>
                 Europe 
                 <i id="e-right" class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
            <li onclick="myFunction2()" id="btn2" class="mobile-country-area__list__li">
              <a class="mobile-country-area__list__a" 
                href="javascript:void(0)" id="worldWideList">
                <i id="w-left" class="fa fa-angle-left" aria-hidden="true"></i>
                Worldwide 
                <i id="w-right" class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          <!-- europe list -->
          <div class="new-accordion">
            <div class="accordion new-accordion__transparent" id="myAccordion">
              <div id="addList">
              </div>
              <div class="sticky-bottom">
                <ul  class="text-center">
                  <li class="list-inline-item btn-margin" id="countryListClose2">
                    <a href="javascript:void(0)" class="btn btn__borderbtn">Cancel</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="btn btn__primarybtn btn__marginzero">Apply</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /europe list -->
          <!-- europe list -->
          <div class="new-accordion">
            <div class="accordion new-accordion__transparent" id="myAccordion">
              <div id="addList2">
                World Wide
              </div>
            </div>
          </div>
          <!-- /europe list -->
        </div>
      </div>
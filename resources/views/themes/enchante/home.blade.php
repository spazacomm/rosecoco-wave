@extends('theme::layouts.app')

@section('content')


<div class="section-home section-home--padding section-home--overlay asyncImage" 
      data-src="assets/images/home-background.jpg"
      style="background-image:url('assets/images/home-background-small.jpg');">
        <div class="home-wrapper clearfix">
          <div class="home-wrapper__countrylist">
            
            <!-- country list -->
            @include('theme::partials.country-list')
            <!-- /country list -->

            <!-- country list mobile -->
            @include('theme::partials.country-list-mobile')
            <!-- /country list mobile -->
          </div>

          @include('theme::partials.escort-list')
          

          @include('theme::partials.advertise-list')
        </div>
      </div>

         @include('theme::partials.content-area')

    

 

@endsection

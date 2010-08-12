require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

set :sass, { :syntax => :scss }

get '/application.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :application
end

get '/' do
  haml :index
end

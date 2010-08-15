require 'sinatra'
require 'haml'
require 'sass'

class RubyOnRio < Sinatra::Base
  set :sass, { :syntax => :scss }
  set :public, 'public'

  get '/application.css' do
    content_type 'text/css', :charset => 'utf-8'
    sass :application
  end

  get '/' do
    haml :index
  end
end

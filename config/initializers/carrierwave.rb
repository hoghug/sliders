CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',       # required
    :aws_access_key_id      => ENV['S3_KEY'],       # required
    :aws_secret_access_key  => ENV['S3_SEC_KEY'],        # required
    :region                 => 'us-east-1'  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = ENV['S3_BUCKET']  # required
  # see https://github.com/jnicklas/carrierwave#using-amazon-s3
  # for more optional configuration
end



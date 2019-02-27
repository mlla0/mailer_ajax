class EmailsController < ApplicationController

  def index
  	@emails = Email.all
  end

  def destroy
  	@email = Email.find(params[:id])
		@email.destroy

  	respond_to do |format|
			format.js
			format.html { redirect_to root_path }
		end
  end

end

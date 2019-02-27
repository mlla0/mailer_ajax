class EmailsController < ApplicationController

  def index
  	@emails = Email.all.order('created_at ASC')
  end

  def update
    @email = Email.find(params[:id])
    @email.update(read: true)

    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
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

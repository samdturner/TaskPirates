TaskPirates.Views.Dashboard = Backbone.CompositeView.extend({
  template: [
              JST["dashboard/dashboard_container"],
              JST["layouts/header_image"],
              JST["layouts/header_dashboard_text"],
              JST["voyage/voyage_review_confirmation"],
              JST['voyage/voyage_review_form_content']
            ],

  initialize: function (options) {

    var view = this;

    this.voyages = options.voyages;

    this.listenTo(this.voyages, 'add', this.maybeAdd);
    this.listenTo(this.voyages, 'remove', this.removeVoyage);

    this.voyages.each(function (voyage) {
      this.maybeAdd(voyage);
    }.bind(this));

    this.addTasks();
  },

  events: {
    "click .submit-review-btn" : "submitReview"
  },

  isIncomplete: function (voyage) {
    if(!voyage.get('completed')) {
      return true;
    }

    return false;
  },

  hasSailor: function (voyage) {
    if(voyage.get('sailor_id')) {
      return true;
    }

    return false;
  },

  maybeAdd: function (voyage) {

    if(this.hasSailor(voyage) && this.isIncomplete(voyage)) {
      this.addVoyage(voyage);
    }
  },

  addVoyage: function (voyage) {
    var currentVoyageItemView = new TaskPirates.Views.CurrentVoyageItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.dashboard-section', currentVoyageItemView);
  },

  addTasks: function () {
    var tasksView = new TaskPirates.Views.VoyageTypesContainer();
    this.addSubview('.sidebar-tasks', tasksView);
  },

  removeVoyage: function (voyage) {
    this.subviews('.dashboard-section').forEach( function (voyageIndexView) {
      if(voyage.get('id') === voyageIndexView.model.get('id')) {
        this.removeSubview('.voyages', voyageIndexView);
      }
    }.bind(this));
  },

  render: function () {
    var content = this.template[0]();
    this.$el.html(content);

    this.$el.find('.dashboard').prepend(this.template[1]({
      imageType: 'dashboard-image'
    }));

    this.$el.find('div.section-salute').append(this.template[2]());
    this.attachSubviews();
    return this;
  },

  cancelVoyage: function (voyage) {
    voyage.destroy({
      success: function () {
        this.voyages.remove(voyage);
      }.bind(this)
    });
  },

  submitReview: function (event) {
    event.preventDefault();
    var voyageId = $(event.currentTarget).data("voyage");
    var reviewedVoyage = this.voyages.getOrFetch(voyageId);
    var attrs = this.$el.find('.feedback-form').serializeJSON();

    $('.review-textarea').val("")
    $('.feedback-form').find("input:radio:checked").prop('checked',false);

    reviewedVoyage.set(attrs);
    reviewedVoyage.save({ completed: true }, {
      success: function () {
        this.voyages.remove(reviewedVoyage);
      }.bind(this)
    });

    this.modalToThanks();
  },

  closeModal: function () {
    $("#lean_overlay").fadeOut(200);
    $('#signup').css({ "display" : "none" })
    this.modalToForm();
  },

  modalToThanks: function () {
    var content = this.template[3]();
    $('#signup').html(content);
    $('.btn-close-modal').click(this.closeModal.bind(this));
  },

  modalToForm: function () {
    var content = this.template[4]();
    $('#signup').html(content);
  }
});
